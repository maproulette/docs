const markdown = require('./markdown')
const picture = require('./picture')

module.exports = {
  svg: function (name, desc, classes, viewBox) {
    const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : ''
    return `<svg ${viewBoxAttr} class="${classes}" aria-describedby="symbol-${name}-desc" role="group">
                <desc id="symbol-${name}-desc">${desc}</desc>
                <use xlink:href="#symbol-${name}"></use>
            </svg>`
  },

  markdown: (value) => {
    if (!value) {
      return ''
    }

    return markdown.render(value)
  },

  picture,
}
