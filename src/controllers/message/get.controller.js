const services = require('../../services')

module.exports = socket => {
  socket.on('MESSAGE:GET', data => {
    const token = data.token
    const messages = services.message.get(token)
    const room_data = {token, messages} 
    socket.emit('MESSAGES', room_data)
  })
}