const memory = require('../../memory')

module.exports = token => {
  return memory.users.get(token)
}