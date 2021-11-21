class Messages {
  constructor (options) {
    this.messages = options.messages
  }

  create (token) {  
    this.messages.set(token, [])
  }

  add (message) {
    const token = message.token
    const data = message.data
    const prevMessages = this.messages.get(token)
    prevMessages.push(data)
    this.messages.delete(token)
    this.messages.set(token, [...prevMessages])
  }

  clear () {
    this.messages.clear()
  }

  messages (token) {               
    return this.messages.get(token)
  }

  size () {
    return this.messages.size
  }
}

const messages = new Messages({
  messsages: new Map()
})

module.exports = messages

// структура объекта message (не актуально)
// {
//   token: 'room token',
//   data: [
//     {
//       type: 'system | user',
//       token: 'user token | system token',
//       message: 'user message'
//     }
//   ]
// }