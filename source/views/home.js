var html = require('choo/html')
var ov = require('object-values')
var format = require('../components/format')

module.exports = page

function page (state, emit) {
  var links = state.page('/').v('links') || []
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <article class="ph3 ph5-l pv4 pv5-ns">
        <div class="w-100 flex flex-wrap justify-around">
          <div class="w-40-ns mb4">
            <div class="lh-copy measure mt2 color-neutral">
              ${format(state.page().v('intro'))}
            </div>
            <div class="f6 ttu tracked">
              ${ov(links).map(function (props) {
                return html`
                  <a class="link color-green f6 db pv1 dim" target="_blank" href="${props.link}" title="${props.title}">${props.title}</a>
                `
              })}
            </div>
          </div>
          ${ov(state.page().v('nav-links')).map(featuredBox)}
        </div>
      </article>
    </section>
  `
}


function featuredBox (props) {
  if (props.text) return textBox()

    return html`
      <a href="${props.link}" class="dim link flex flex-column w-40-ns w-100 br2 ba color-neutral b--neutral-10 mb4">
        ${props.image ? img(props.image) : ''}
        <div class="ph2 ph3-ns">
          <div class="dt w-100 mt1">
            <div class="dtc">
              <h1 class="f5 f4-ns mv0">${props.title}</h1>
            </div>
            <div class="dtc tr">
              <h2 class="f5 mv0"></h2>
            </div>
          </div>
          <p class="f6 lh-copy measure mt2 mid-gray">
            ${props.description}
          </p>
          <p class="f6 lh-copy measure mt2 i mid-gray">
            by ${props.author}
          </p>
        </div>
      </a>
    `

  function img (url) {
    return html`<img class="w-100 br2 br--top" style="margin-bottom:auto;" src="/dat.land/${url}">`
  }
}

function textBox () {
  return html`
    <div class="flex flex-column w-40-ns w-100 br2 ba color-neutral b--neutral-10 mb4">
      <article>
        <a class="link hover-color-green dt w-100 pa1 ph4 mt4" href="#0">
          <div class="dtc w2 h2">
            <svg class="db w-100"><use xlink:href="#daticon-star-dat"/></svg>
          </div>
          <div class="dtc v-top pl2">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">Building on Dat</h1>
            <h2 class="f6 fw4 mt2 mb0 black-60">
              The <a href="https://datprotocol.com">Dat Protocol</a> and Node.js ecosystem make it easy to build peer-to-peer applications on Dat.
            </h2>
          </div>
        </a>
      </article>
      <article>
        <a class="link hover-color-green dt w-100 pa1 ph4 mv2" href="#0">
          <div class="dtc w2 h2">
            <svg class="db w-100"><use xlink:href="#daticon-create-new-dat"/></svg>
          </div>
          <div class="dtc v-top pl2">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">Add Your Creations</h1>
            <h2 class="f6 fw4 mt2 mb0 black-60">
              Help build the Dat ecosystem! Share your creation on Dat Land and tell your friends.
            </h2>
          </div>
        </a>
      </article>
      <article>
        <a class="link hover-color-green dt w-100 pa1 ph4 mv2" href="#0">
          <div class="dtc w2 h2">
            <svg class="db w-100"><use xlink:href="#daticon-happy-dat"/></svg>
          </div>
          <div class="dtc v-top pl2">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">Contribute to Dat</h1>
            <h2 class="f6 fw4 mt2 mb0 black-60">
              Dat Project runs through open working groups and aims to be transparent about how the organization operates. Dat is publicly funded and supported by a nonprofit. Join us!
            </h2>
          </div>
        </a>
      </article>
    </div>
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
