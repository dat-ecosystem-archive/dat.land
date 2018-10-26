var html = require('choo/html')
var format = require('../components/format')

module.exports = page

function page (state, emit) {
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <div class="ph3 ph5-l pb4 pb5-ns pt2">
        hello
      </div>
    </section>
  `
}

// <article class="cf ph3 ph5-ns pv5">
//       <header class="fn fl-ns w-50-ns pr4-ns">
//         <hr class="mw3 ml0 bt bw1 b--color-pink"/>
//         <h1 class="f2 small-caps lh-title fw9 mb3 mt0 pt3 bw2">
//           ${state.page().v('title')}
//         </h1>
//         <h2 class="mt3 f6 ttu tracked color-neutral-70 mb0">${state.page.subtitle}</h2>
//         <h3 class="f4 fw4 measure lh-copy color-neutral-30">
//           ${format(state.page().v('intro'))}
//         </h3>
//       </header>
//       <div class="fn fl-ns w-50-ns">
//         ${text()}
//       </div>
//     </article>