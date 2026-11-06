module Jekyll
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
          slug = slug[match[0].length..-1] if slug.start_with?(match[0])
          doc.data['order'] = match[1]
        end
        doc.data['slug'] = slug
      end
    end
  end

  class Permalink < Generator
    # Assigns permalinks of the form /:collection/:slug/
    safe true

    def generate(site)
      site.documents.each do |doc|
        slug = doc.data['slug']
        slug += "/" unless slug == "index"
        doc.data['permalink'] ||= "/#{doc.collection.label}/#{slug}"
      end
    end
  end

  class Section < Generator
    # Assigns a section to each page in the 'documentation' collection, based on
    # the subdir it's in. Used to arrange pages into sections in the sidebar.
    safe true

    def generate(site)
      site.collections["documentation"].docs.each do |doc|
        doc.data['section'] = File.basename(File.dirname(doc.relative_path))
      end
    end
  end
end
