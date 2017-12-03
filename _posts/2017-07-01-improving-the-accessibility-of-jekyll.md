---
priority: 0.6  
title: Improving the Accessibility of Jekyll  
desc: Lets make Jekyll a platform for every user  
keywords: "hyde, md, markdown, jekyll, text, note, editor, gfm, github pages, blog, blogging, readme, markup, github, CodeMirror, syntax, highlighting"   
date: 2017-07-01  
categories: blog  
options: halfhead  
image: jekyll.png  
header: jekyll.png
tags:
  - hyde
  - md
  - markdown
  - jekyll
  - text
  - note
  - editor
  - gfm
  - github pages
  - blog
  - blogging
  - readme
  - markup
  - electron
  - github
  - CodeMirror
  - syntax
  - highlighting
  - featured
---

  Due to it's simplicity, [**Jekyll**][jekyll] offers many advantages over other blogging platforms, including increased loading speeds, securtity, and server-side consistency. In the words of it's creators, 
  > Jekyll does what you tell it to do — no more, no less. It doesn't try to outsmart users by making bold assumptions, nor does it burden them with needless complexity and configuration. Put simply, Jekyll gets out of your way and allows you to concentrate on what truly matters: **your content**.  

  Also, for those in a hurry to get their blog up and running, the Jekyll community has also created a large assortment of easily customizable free and paid themes. So no matter your goals, you're guarenteed to find a theme that suits your needs.     
  Additionally, Jekyll's integration with [GitHub Pages][github pages] provides users with free web-hosting for each GitHub profile, potentially saving hundreds of dollars in hosting costs for blogs with high traffic.  
    
  <h4 align="center">So why does this platform seem isolated to the developer community?</h4>  
  
  A major aspect of Jekyll is that it uses markdown for writing and formatting blog posts. For most developers, writing in markdown quickly becomes second nature from writing project documentation on [GitHub][github] or similar version control repository sites. Though, for the less technically-inclined, this foreign markup can be intimidating at first glance, consequently turning off many potential users.    
  
  In response, I've began development of [**Hyde**][hyde], a Jekyll-inspired markdown editor that aims to improve the accessibility of writing blog posts in markdown by providing an experience that's akin to writing in a word processor or online text formatting field, while still exposing users to the markdown syntax.  
  Although still in it's infancy, **Hyde** currently features a formatting toolbar, side-by-side HTML and rendered Markdown live-preview, sync-scrolling, as well as syntax-highlighting for markdown and GFM-compatible HTML with a collection of syntax themes.  
  Additionally, through future developments, I hope to also incorporate automated [YAML front-matter][jekyll frontmatter] creation, git-integration, and many more features. 
    
  If you are a current or prospective [Jekyll][jekyll] user that's interested in this project, feel free to share any suggestions or features you'd like to see in the future via [**Github**][hyde] or the link below!  
  
  <br>
  
  <div class="button bottom special">
    <a class="" href="{{ '/contact/' | prepend: site.baseurl }}" style="padding-left: 4px;">Contact Me</a>
  </div>


[hyde]: https://github.com/Hyde/
[jekyll]: https://jekyllrb.com/
[jekyll frontmatter]: https://jekyllrb.com/docs/frontmatter/
[github]: https://github.com/
[github pages]: https://pages.github.com
