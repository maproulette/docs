# MapRoulette Docs

Documentation site for MapRoulette.org 

If you would like to contribute to this documentation, thank you!
* If you have a video or article we should link to, feel free to open an issue and we will look at the best way to include it in learn.maproulette.org.
* If you want to write or translate documentation, please get in touch at maproulette@maproulette.org. 

## Technical Details

This site is built using [Jekyll](https://jekyllrb.com/).

To build the website and preview it locally, you'll need to:
1. Install a recent Ruby version (tested on Ruby 3.4.1)
2. Run `gem install bundler` to install Bundler (a dependency manager for Ruby)
3. Run `bundle install` to install Jekyll and a few other dependencies (listed in the Gemfile)
4. Run `bundle exec jekyll serve` to build and start the website.
5. Go to http://localhost:4000 in your browser to view the site.

After this, if you add or make edits to markdown files, HTML templates, etc, Jekyll will rebuild the site automatically, and you'll see the changes once you refresh the page in your browser. If you make changes to `_config.yaml` or any code in the `_plugins` directory, you'll need to restart Jekyll for the changes to take effect.
