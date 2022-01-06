var html = require('choo/html')
var format = require('../components/format')

module.exports = view

function view (state, emit) {
  return html`
    <main>
      <header class="">
        <div class="vh-75 w-100 mb2 dt pa4 pt5-ns ph7-l">
          <div class="dtc v-mid mw8 center">
            <div class="f6 mb2 dib ttu tracked"><small>The page was</small></div>
            <h1 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span class="lh-copy tracked-tight">
              Not Found
              </span>
            </h1>
            <h4 class="f3-ns f4 fw2 lh-copy">
             Oh no! Did you check if it was plugged in?
            </h4>
            <h5 class="f6 fw3 small-caps tracked"><a class="dim link" href="./">Go Home</a></h5>
          </div>
        </div>
      </header>
    </main>
  `
}
