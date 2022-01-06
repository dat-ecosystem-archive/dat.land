var html = require('choo/html')
const css = require('sheetify')
var ov = require('object-values')
var datIcons = require('dat-icons')

var views = require('./')

module.exports = view

function view (state, emit) {
  var page = state.page
  // loading
  if (!state.site.loaded) return renderLoading(state, emit)
  // 404
  if (!page().v('url')) return renderNotFound(state, emit)
  // view
  var view = views[page().v('view')] || views.default

  // title
  var title = getTitle(state)
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)

  // template
  return html`
    <body>
      <div class="positioned">
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
        width: 100%;
        padding: 20px;
      }
      </style>
      <span>This website is deprecated. Please check out the new version at <a target="_blank" href="https://dat-ecosystem.github.io"> https://dat-ecosystem.github.io </a></span>
      </div>
      <main class="relative flex flex-wrap">
        ${renderNavigation(state, emit)}
        <div class="min-vh-100-l w-100 w-80-l lh-copy pt3">
          ${view(state, emit)}
        </div>
      </main>
      ${datIcons()}
    </body>
  `
}

function renderLoading (state, emit) {
  return html`
    <body>
      <main class="relative flex">
        ${renderNavigation(state, emit)}
        <div class="loading">
        </div>
      </main>
      ${datIcons()}
    </body>
  `
}

function renderNotFound (state, emit) {
  return html`
    <body>
      <main class="relative flex">
        ${renderNavigation(state, emit)}
        <section class="dt w-80-l w-100 vh-100 bl b--black-10 black-70">
          <div class="tc v-mid dtc w-100 h-100 bg-lightest-blue">
            <h3 class="ttu tracked-tight f-subheadline">Page not found</h3>
          </div>
        </section>
      </main>
    </body>
  `
}

function renderNavigation (state, emit) {
  const logoCss = css`
    :host {
      transition: transform .5s ease-in-out;
      width: inherit;
    }
    :host:hover, :host:focus{
      transform: scale(1.1) perspective(10px) translateY(-10px);
    }
  `
  var links = state.page('/').v('nav-links') || []
  return html`
    <nav class="bg-neutral w-20-l w-100 min-vh-100-l pa3 pa4-l pl3-l top-0 sticky-l">
      <div class="flex flex-column-l justify-between mw-100">
        <div class="pt3 bt bw2 b--color-pink color-neutral-04">
          <a class="link mb0 f2 lh-title fw9" href="./" title="dat.land">
            dat<span class=" hover-color-green color-neutral-50">
            <img class="${logoCss} w2 v-mid h2 mr1 pb1" src="/dat.land/assets/dat-logo-small.png">
            land</span>
          </a>
        </div>
        <h3 class="mt0 mb5 f3 color-neutral-04 lh-title mw5 dn db-l">
          ${state.page('/').v('tagline')}
        </h3>

        <div class="f6 ttu tracked flex-grow pa3 pa0-l flex-none-l items-center">
          ${ov(links).map(function (props) {
            return html`
              <a class="link color-green f6 db pv1 dim" target="_blank" href="${props.link}" title="${props.title}">${props.title}</a>
            `
          })}
        </div>
      </div>
      <footer class="absolute bottom-0 mb4 color-neutral-04 dn db-l">
        <a href="http://twitter.com/${state.page('./contact').v('twitter')}" target="_blank" class="dim f5 db mb1 lh-solid">@dat_project</p>
        <a href="https://enoki.site" class="link f5 dim lh-solid">Built on Enoki</a>
      </footer>
    </nav>
  `
  // function editLink () {
  //   const ghPath = state.page().v('path')
  //   const href = `http://github.com/dat-ecosystem/dat-land/blob/master${ghPath}/index.txt`

  //   return html`
  //     <a style="top: 63px;" class="fixed right-0 bg-neutral ph2 mr3 pv3 br3 br--bottom
  //         grow no-underline" href="${href}" title="Edit on Github">
  //         <div class="color-pink v-mid dib mr2 h2 w2" style="height:20px"><svg><use xlink:href="#daticon-edit-dat"/></svg></div>
  //         <span class="f5 b color-neutral-04 v-mid ttu tracked dn-m">
  //          Edit Page
  //         </span>
  //     </a>
  //   `
  // }
}

function getTitle (state) {
  var siteTitle = state.page('/').v('title')
  var pageTitle = state.page().v('title')
  console.log('title', siteTitle, pageTitle)

  return siteTitle !== pageTitle
    ? siteTitle + ' | ' + pageTitle
    : siteTitle
}
