const create_service = require('./create.service')
const getUser_service = require('./get.service')

module.exports = {
  create: user => create_service(user),
  getUser: token => getUser_service(token),
}