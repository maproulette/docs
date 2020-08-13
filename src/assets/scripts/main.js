import 'focus-visible'
import 'alpinejs'
import markdownIt from 'markdown-it'

window.markdown = markdownIt({
  html: true,
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
