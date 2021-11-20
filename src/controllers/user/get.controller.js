const services = require('../../services')

module.exports = socket => {
  socket.on('USER:GET', data => {
    const user_data = services.user.getUser(data.token)
    socket.emit('USER:DESCRIPTION', user_data)
  })
}