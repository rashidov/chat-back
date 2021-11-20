const getMessages = require('./get.controller')

module.exports = {
  getMessages: socket => getMessages(socket)
}