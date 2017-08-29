var html = require('choo/html')
var svgSprite = require('dat-icons')
var navigation = require('./header')
var footer = require('./footer')

module.exports = wrapper

function wrapper (view) {
  return function (state, emit) {
    return html`
      <main class="bg-neutral white min-vh-100">
        ${navigation({
          active: state.page ? state.page.path : '',
          ghPath:
            state.page ?
              state.page.dirname ?
                state.page.dirname + '/' + state.page.file
                : state.page.file
              : '',
          links: state.content ? state.content.children : { },
          title: state.content ? state.content.title : '',
        })}
        ${view(state, emit)}
        ${footer(state, emit)}
        ${svgSprite()}
      </main>
    `
  }
}
