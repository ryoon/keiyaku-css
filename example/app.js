import marked from 'marked'
import 'whatwg-fetch'

fetch('contract.md')
  .then(response => response.text())
  .then(md => document.querySelector('.teikan').innerHTML = marked(md))
