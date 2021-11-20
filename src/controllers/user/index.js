const create = require('./create.controller')
const getUser = require('./get.controller')

module.exports = {
  create: socket => create(socket),
  getUser: socket => getUser(socket)
}