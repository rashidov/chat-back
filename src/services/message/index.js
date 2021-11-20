const get_service = require('./get.service')

module.exports = {
  get: token => get_service(token)
}