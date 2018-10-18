var html = require('choo/html')
var md = require('marked')

module.exports = format

var renderer = new md.Renderer()

renderer.link = function (href, title, text) {
  return `
    <a class="link color-green hover-color-green-hover"
      href="${href}" title="${title || text}">${text}</a>
  `
}

// Overwrite md renderers
//
// renderer.hr = function () {
//   return `
//     <hr class="mw3 mb5 mt5 bb bw1 b--black-10">
//   `
// }
// renderer.blockquote = function (text) {
//   return `
//     <div class="pa4">
//       <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
//         ${text}
//       </blockquote>
//     </div>
//   `
// }

function format (str) {
  var output = md(str || '', {renderer: renderer})
  if (typeof window === 'undefined') {
    var wrapper = new String(output)
    wrapper.__encoded = true
    return wrapper
  } else {
    var el = html`<div></div>`
    el.innerHTML = output
    return [...el.childNodes]
  }
}
