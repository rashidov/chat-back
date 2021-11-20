const create = require('./create.controller')

module.exports = {
  create: socket => create(socket)
}