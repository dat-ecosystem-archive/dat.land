var html = require('choo/html')
var ov = require('object-values')
var wrapper = require('../components/wrapper')
var format = require('../components/format')

module.exports = require('./page')

// Use default page for home for now
//
// module.exports = wrapper(home)

// function home (state, emit) {
//   return html`
//     <section class="">
//     <article class="cf ph3 ph5-ns pv5">
//       <header class="fn fl-ns w-50-ns pr4-ns">
//         <hr class="mw3 ml0 bt bw1 b--color-pink"/>
//         <h1 class="f2 small-caps lh-title fw9 mb3 mt0 pt3 bw2">
//           ${state.content.title}
//         </h1>
//         <h2 class="mt3 f6 ttu tracked color-neutral-70 mb0">${state.content.subtitle}</h2>
//         <h3 class="f4 fw4 measure lh-copy color-neutral-30">
//           ${format(state.content.intro)}
//         </h3>
//       </header>
//       <div class="fn fl-ns w-50-ns">
//         ${text()}
//       </div>
//     </article>
//     </section>
//   `

//   function text () {
//     return html`
//       <div class="lh-copy measure ">
//         ${format(state.page.text)}
//       </div>
//     `
//   }
// }
