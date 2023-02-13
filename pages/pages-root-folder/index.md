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
  url: 'http://kdillmcfarland.github.io/short/'
  image: kadm_headshot_lrg.jpg
  text: "Where I've been and what I've done."
widget2:
  title: "Blog"
  url: 'http://kdillmcfarland.github.io/blog/'
  image: Claire2.jpg
  text: "Coding tips, musings, and anything else that pops into my head worth sharing."
widget3:
  title: "Workshops"
  url: 'https://bigslu.github.io/workshops/'
  image: hex.stickers.png 
  text: "R, git, cloud computing, and more!"
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
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---
