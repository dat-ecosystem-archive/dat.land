const html = require('choo/html')
const path = require('path')
const ov = require('object-values')

module.exports = function (state, emit) {
  const active = state.active || ''
  const links = ov(state.links) || [ ]

  return html`
    <nav class="bg-white bb b--dat-neutral-10 dt w-100 border-box pa3 ph5-l">
      <div class="dtc v-mid w-25-l w-10">
        <a class="spin v-mid dib link dim mr2 w2 h2" href="/" title="${state.title}">
          <img src="/img/dat-hexagon.svg" alt="Dat Project Logo">
        </a>
        <a class="v-mid link dim color-neutral b f5 f3-ns dib-l dn" href="/" title="Dat Project">Dat<span class="ml1 color-neutral-60">Land</span></a>
      </div>
      <div class="dtc v-mid w-75 tr">
        ${links.map(link)}
        ${editLink('color-neutral')}
      </div>
    </nav>
  `

  function link (link) {
    var activeClass = isActive(link.dirname) ? 'black' : 'green'
    return html`
      <a class="${activeClass} link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="${link.url}">${link.nav || link.dirname}</a>
    `
  }

  function isActive (pathLink) {
    return active
      .split(path.sep)
      .filter(str => str)[0] ===
      path.basename(pathLink)
  }

  function editLink (className, text) {
    const href = `http://github.com/dat-land/website/blob/master/content/${state.ghPath}`

    return html`
      <a class="inline-flex-ns dn ba-l b--dat-green bn grow no-underline items-center v-mid pv2 ph3-l" href="${href}" title="Edit on Github">
          <div class="color-green dib w2 h2 mr2"><svg><use xlink:href="#daticon-edit-dat"/></svg></div>
          <span class="color-neutral ttu tracked dn-m">
           Edit This Page
          </span>
      </a>
    `
  }
}
