const users = require('./users')
const rooms = require('./rooms')
const messages = require('./messages')

module.exports = {
  users: {
    // сущности
    // token - пользователя
    // user - объект пользователя
    add: user => user.add(user),
    get: token => users.user(token),
    size: () => users.size()
  },
  rooms: {
    // сущности
    // token - комнаты 
    // room - объект комнаты
    create: room => room.create(room),
    add: (room_token, user_token) => rooms.add(room_token, user_token),
    get: token => rooms.room(token),
    size: () => rooms.size()
  },
  messages: {
    // сущности 
    // token - комнаты к которой принадлежат сообщения
    // message - объект сообщения
    create: token => messages.create(token),
    add: message => messages.add(message),
    get: token => messages.messages(token),
    size: () => messages.size(),
    clear: () => messages.clear(),
  }
}