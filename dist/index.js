
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./blackbullswap-celo.cjs.production.min.js')
} else {
  module.exports = require('./blackbullswap-celo.cjs.development.js')
}
