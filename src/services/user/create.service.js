const memory = require('../../memory')

module.exports = user => {
  memory.users.add(user)
  console.log('=== user memory ===', memory.users.get)
}