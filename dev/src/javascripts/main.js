import './modules/importPug'
import '../css/main.scss'

import load from './modules/load'

if (module.hot) {
  module.hot.accept(console.error)
  // HMRに失敗した時に強制リロードする
  module.hot.dispose(() => {
    window.location.reload()
  });
}

document.addEventListener('DOMContentLoaded', () => {
  new Main()
})

class Main {
  constructor() {

    this.init()
    this.click()
  }

  /**
   * init
  */
  init() {
    this.element = document.querySelector( '.test__image' )
    this.number = 0
    this.element.textContent = this.number

    load(`${process.env.PUBLIC_URL}/json/test.json`).then( data => {
      document.querySelector('.test__title').textContent = data.testTitle
    })
  }

  /**
   * click
   */
  click() {
    this.element.addEventListener('click', () => {
      this.number++
      this.element.textContent = this.number
    })
  }
}
