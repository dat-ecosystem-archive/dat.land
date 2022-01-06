// styles
require('./design')

var choo = require('choo')
const Enoki = require('enoki')

var app = choo()

console.log('This website is deprecated. Please check out the new version at https://dat-ecosystem.github.io')

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
