const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([nextTranslate], {
  i18n: {
    localeDetection: false,
  },

  baseUrl: 'src',
  publicRuntimeConfig: {},
})
