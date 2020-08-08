import '../styles/another.scss'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})

const init = () => {}
