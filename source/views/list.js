var html = require('choo/html')
var ov = require('object-values')
var format = require('../components/format')

module.exports = page

function page (state, emit) {
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <article class="ph3 ph5-l pv4 pv5-ns">
        <div class="w-100 mb4">
          <div class="lh-copy measure-wide center">
            ${format(state.page().v('text'))}
          </div>
        </div>
        <div class="flex flex-wrap w-100 justify-around">
          ${ov(state.page().v('list')).map(box)}
        </div>
      </article>
    </section>
  `
}


function box (props) {
    return html`
      <a href="${props.link}" class="link flex flex-column w-30-ns w-50 br2 ba color-neutral b--neutral-10 mb3">
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
            <b>TAGS</b>: ${props.tags}
          </p>
        </div>
      </a>
    `
}
