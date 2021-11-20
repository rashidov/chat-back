const md5 = require('md5')
const services = require('../../services')

module.exports = socket => {
  socket.on('ROOM:CREATE', data => {
    const token = md5(data.title)
    const room = { token, data: {
      name: data.title,
      users: []
    }}
    services.room.create(room)
  })
}