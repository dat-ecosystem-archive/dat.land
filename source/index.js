// styles
require('./design')

var choo = require('choo')
const Enoki = require('enoki')

var app = choo()
app.use(() => {
  if (window.location.host === 'dat.land') return window.location = 'https://dat.foundation'
})
const defaults = {
  "blueprints": "/blueprints",
  "config": "site.json",
  "content": "content",
  "fallback": "./bundles/content.json",
  "file": "index.txt"
}
app.use(require('enoki/choo')(defaults))
app.use(require('./plugins/scroll'))
app.route('*', require('./views/wrapper'))

// start
if (!module.parent) app.mount('body')
else module.exports = app
