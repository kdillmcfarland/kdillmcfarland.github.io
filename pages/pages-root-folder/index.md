---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: heatmap.png
widget1:
  title: "Resume"
  url: 'http://kdillmcfarland.github.io/resume/'
  image: 
  text: 'Where I've been and what I've done'
widget2:
  title: "Blog"
  url: 'http://kdillmcfarland.github.io/blog/'
  image: 
  text: 'Coding tips, thoughts, musings, and anything else that pops into my head worth writing down.'
widget3:
  title: "Workshops"
  url: 'http://kdillmcfarland.github.io/workshops/'
  image: 
  text: 'Data science worshops in R, git, and cloud computing.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: https://tinyletter.com/feeling-responsive
  text: Inform me about new updates and features ›
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>