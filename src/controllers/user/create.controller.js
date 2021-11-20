const md5 = require('md5')
const services = require('../../services')

module.exports = socket => {
  socket.on('USER:CREATE', data => {
    const token = md5(data.first_name + data.last_name + data.position)
    const user = {token, data: {...data}}
    services.user.create(user)
    socket.emit('USER:CREATE/TOKEN', token)
  })
}