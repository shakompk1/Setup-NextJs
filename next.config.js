const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([nextTranslate], {
  i18n: {
    localeDetection: true,
  },

  baseUrl: 'src',
  publicRuntimeConfig: {},
})
