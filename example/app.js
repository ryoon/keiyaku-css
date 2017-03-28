import marked from 'marked'
import 'whatwg-fetch'

fetch('teikan.md')
  .then(response => response.text())
  .then(md => document.querySelector('.teikan').innerHTML = marked(md))
