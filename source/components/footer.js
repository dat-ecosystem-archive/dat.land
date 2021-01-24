const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <footer class="bg-white color-neutral ph3 ph5-ns pv4 pv5-ns bt b--dat-neutral-70">
      <div class="mw9 center">
        <div class="mb3 lh-copy">
          <a class="f4 b color-neutral dib link dim mr3 mt1" href="https://datproject.org" title="Dat Project">
            <img src="/dat.land/img/dat-hexagon.svg" class="dib w2 h2 mr2 v-mid mb1" alt="Dat Project">
            Dat Project
          </a>
          <a class="f4 link color-neutral dim b dib mr3 mb3" href="http://docs.datproject.org" title="Documentation - Dat ">
            Docs
          </a>
          <a class="f4 link color-neutral dim b dib mr3 mb3" href="http://blog.datproject.org" title="Blog - Dat Project">
            Blog
          </a>
          <a class="f4 link color-neutral dim b dib mr3 mb3" href="https://github.com/datproject/awesome-dat" title="Awesome Dat">
            Resources
          </a>
        </div>
        <div class="mt4">
          <a class="ba b--dat-green no-underline grow b inline-flex items-center mr3 mb3 pv2 ph3" href="https://github.com/datproject" title="Dat Project Github">
            <div class="color-green dib w2 h2 mr2"><svg><use xlink:href="#daticon-happy-dat"/></svg></div>
            <span>Contribute on Github</span>
          </a>
          <a class="ba b--dat-green no-underline grow b inline-flex items-center mr3 mb3 pv2 ph3" href="http://chat.datproject.org" title="Join our Chat">
              <div class="color-green dib w2 h2 mr2"><svg><use xlink:href="#daticon-question"/></svg></div>
              <span>
                Curious? Join Our Chat
              </span>
          </a>
          <a class="ba b--dat-green no-underline grow b inline-flex items-center mb3 pv2 ph3" href="https://donate.datproject.org" title="Donate to Code for Science & Society">
            <div class="color-green dib w2 h2 mr2"><svg><use xlink:href="#daticon-star-dat"/></svg></div>
            <span>Donate to Support Public Data</span>
          </a>
        </div>
        <p class="f6 measure copy lh-copy">
          We want to built this community with you.
          See something that can be improved?
          Please, let us know or hit the edit button at the top.
        </p>
        <p class="f6 measure copy lh-copy">
          Have questions? Join our chat or ask on <a href="http://twitter.com/dat_project" class="color-blue no-underline underline-hover">Twitter</a> or <a href="http://github.com/datproject" class="color-pink no-underline underline-hover dat-green">Github</a>.
        </p>
        <p class="mt5 f6 measure copy lh-copy">
          Wow, you read our entire internet page.
          Dat flourishes because our community, including you! Thank you!
        </p>
      </div>
    </footer>
  `
}
