module Jekyll
  class PopularTags < Liquid::Tag

    def initialize(tag_name, count, tokens)
      super
      @count = count.to_i
    end

    def render(context)
      site = context.registers[:site]
      sorted = site.tags.sort_by { |tag, posts| posts.count }
      sorted = sorted.reverse.first(@count)
      html = "<ul class='inline'>"
      sorted.each do |tag, posts|
        link = tag.downcase.tr(" ", "-")
        html << "<li class='card-tag-item'><a href='#{site.baseurl}/tags\##{link}-tag' class='tag'>#{tag.capitalize}</li>"
      end
      html << "</ul>"
      html
    end
  end
end

Liquid::Template.register_tag('popular_tags', Jekyll::PopularTags)
