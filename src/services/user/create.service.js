const memory = require('../../memory')

module.exports = user => {
  memory.users.add(user)
}