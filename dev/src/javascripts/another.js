import '../css/another.scss'

if (module.hot) {
  module.hot.accept(console.error)
  // HMRに失敗した時に強制リロードするs
  module.hot.dispose(() => {
    window.location.reload()
  });
}

document.addEventListener('DOMContentLoaded', () => {
  new Another()
})

class Another {
  constructor() {

    this.init()
  }

  /**
   * init
   */
  init() {
    console.log('another')
  }
}
