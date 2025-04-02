module Jekyll
  class LanguageField < Generator
    # Parse an ISO language code out of the suffix of each page's filename,
    # assign it to the 'lang' property, and strip it from the slug. Also,
    # suppress output of pages whose lang is not in the list of enabled
    # locales in _config.yaml.
    safe true

    def generate(site)
      site.documents.each do |doc|
        if lang = get_lang(doc.relative_path)
          doc.data['lang'] ||= lang.gsub('_', '-')
          doc.data['slug'].chomp!(".#{lang}")
        end
      end

      site.pages.each do |page|
        if lang = get_lang(page.relative_path)
          page.data['lang'] ||= lang.gsub('_', '-')
          page.data['slug'] = page.basename.chomp!(".#{lang}")
        end
      end

      site.pages.reject! {|page| not lang_enabled?(site, page) }

      site.collections.each do |name, collection|
        collection.docs.reject! {|doc| not lang_enabled?(site, doc) }
      end
    end

    def lang_enabled?(site, doc)
      lang = doc.data['lang']
      lang == nil or site.config['locales'].include? lang
    end

    def get_lang(filename)
      # Match the language code from the filename
      if filename =~ /\.(\w{2,3}([-_]\w{2,3})?)\.md$/
        return $1
      end
      nil
    end
  end

  class StripNumberedPrefixes < Generator
    # Remove numeric prefixes from slugs of collection items (they are there for
    # sorting but we don't want them ending up in the URLs). Put the number in
    # an 'order' field in the metadata instead.
    safe true

    def generate(site)
      site.documents.each do |doc|
        slug = doc.data['slug']
        match = doc.basename.match(/^(\d+)-/)
        if match
          if slug.start_with?(match[0])
            slug = slug[match[0].length..-1]
          end
          doc.data['order'] = match[1]
        end
        doc.data['slug'] = slug
      end
    end
  end

  class Permalink < Generator
    # Assigns permalinks to pages that begin with their language,
    # e.g. /en-US/:collection/:slug/
    safe true

    def generate(site)
      site.documents.each do |doc|
        lang = doc.data['lang']
        collection_name = doc.collection.label
        slug = doc.data['slug']
        if slug != "index" then slug += "/" end
        doc.data['permalink'] ||= "/#{lang}/#{collection_name}/#{slug}"
      end

      site.pages.each do |page|
        if lang = page.data['lang']
          dirname = File.dirname(page.relative_path)
          slug = page.data['slug']
          if slug != "index" then slug += "/" end
          page.data['permalink'] ||= "/#{lang}/#{dirname}/#{slug}"
        end
      end
    end
  end

  class Section < Generator
    # Assigns a section to each page in the 'documentation' collection, based on
    # the subdir it's in. Used to arrange pages into section in the sidebar.
    safe true

    def generate(site)
      site.collections["documentation"].docs.each do |doc|
        doc.data['section'] = File.basename(File.dirname(doc.relative_path))
      end
    end
  end

  class Variants < Generator
    # Add a 'variants' property to each page in every collection, which links to
    # other versions of that page in other languages. 'variants' is a Hash where
    # keys are ISO language codes and values are URLs.
    safe true

    def generate(site)
      site.collections.each do |_, collection|
        collection.docs.each do |doc|
          ident = drop_lang_suffix(doc.relative_path)
          doc.data['variants'] = collection.docs
            .filter { |d| ident == drop_lang_suffix(d.relative_path) }
            .map { |d| [d.data['lang'], d.data['permalink']] }
            .to_h
        end
      end
    end

    def drop_lang_suffix(filename)
      return filename.sub(/\.\w{2,3}([-_]\w{2,3})?.md$/, '')
    end
  end
end
