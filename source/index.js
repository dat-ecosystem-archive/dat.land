// styles
require('./design')

var choo = require('choo')
const Enoki = require('enoki')

var app = choo()

setTimeout(function try_again () {
  const main = document.querySelector('main')
  if (!main) setTimeout(try_again, 50)
  const deprecated = document.createElement('div')
  deprecated.innerHTML = `
  <style>
  .positioned {
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
    border-bottom: 2px solid black;
    font-family: monospace;
    font-size: 20px;
    font-weight: bold;
    color: black;
    z-index: 999;
    width: 100vw;
    padding: 20px;
  }
  </style>
  <span>This website is deprecated. Please check out the new version at <a target="_blank" href="https://dat-ecosystem.github.io"> https://dat-ecosystem.github.io </a></span>
  `
  deprecated.setAttribute('class', 'positioned')
  console.log('This website is deprecated. Please check out the new version at https://dat-ecosystem.github.io')
  document.body.insertBefore(deprecated, main)
}, 100)

const defaults = {
  "blueprints": "/blueprints",
  "config": "site.json",
  "content": "content",
  "fallback": "./bundles/content.json",
  "file": "index.txt"
}
app.use(require('enoki/choo')(defaults))
app.use(require('./plugins/scroll'))
app.use(async function countStore (state, emitter) {
  const content = await fetch('./bundles/content.json').then(x => x.json())
  state.contact = { twitter: '@dat_project' }
  state.content = content
  // emitter.on('increment', function (count) {
  //   state.count += count
  //   emitter.emit('render')
  // })
})
app.route('*', require('./views/wrapper'))

// start
if (!module.parent) app.mount('body')
else module.exports = app

setTimeout(() => {
  const btn = document.body.querySelector('[title="dat.land"]')
  btn.click()
}, 50)
