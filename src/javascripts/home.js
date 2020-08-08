import '../styles/home.scss'

import load from './modules/load'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})

const init = () => {
  const element = document.querySelector('.test__image')
  let number = 0
  element.textContent = number

  element.addEventListener('click', () => {
    number++
    element.textContent = number
  })

  load(`${process.env.PUBLIC_URL}/json/test.json`).then((data) => {
    document.querySelector('.test__title').textContent = data.testTitle
  })
}
