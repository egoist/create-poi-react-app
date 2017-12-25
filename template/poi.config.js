const path = require('path')

module.exports = {
  entry: 'src/index.js',
  html: {
    template: path.resolve('public', 'index.html')
  },
  staticFolder: 'public',
  presets: [
    require('poi-preset-react')(),
    require('poi-preset-sw-precache')()
  ]
}
