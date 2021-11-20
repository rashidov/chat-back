const create_service = require('./create.service')

module.exports = {
  create: room => create_service(room)
}