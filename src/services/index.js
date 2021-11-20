const user_service = require('./user')
const room_service = require('./room')
const message_service = require('./message')

module.exports = {
  user: {
    create: user => user_service.create(user)
  },
  room: {
    create: room => room_service.create(room)
  },
  message: {
    get: token => message_service.get(token)
  }
}