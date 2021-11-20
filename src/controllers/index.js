const user_controller = require('./user')
const room_controller = require('./room')
const message_controller = require('./message')

exports.user = ({id, socket}) => {
  // const options = {id, socket}
  user_controller.create(socket)
  user_controller.getUser(socket)
}

exports.room = ({id, socket}) => {
  // const options = {id, socket}
  room_controller.create(socket)
}

exports.message = ({id, socket}) => {
  // const options = {id, socket}
  message_controller.getMessages(socket)
}