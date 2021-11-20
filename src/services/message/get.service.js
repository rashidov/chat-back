const memory = require('../../memory')

module.exports = token => {
  return memory.messages.get(token)
}