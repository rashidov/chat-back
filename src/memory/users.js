
class Users {
  constructor (options) {
    this.users = options.users
    this.listUsers = options.list
  }

  add (user) {
    this.users.set(user.token, {...user.data})
    this.listUsers.set(user.token, {
      socket_id, status: 'online'
    })
  }

  user (token) {
    return this.users.get(token)
  }

  size () {
    return this.users.size
  }

  copyObjList (token) {
    return Object.assign({}, this.listUsers.get(token))
  }

  updateObjList (token, prevObj) {
    this.listUsers.delete(token)
    this.listUsers.set(prevObj)
  }

  setOnline (user_token, socket_id) {
    const prevUser = this.copyObjList(user_token)
    prevUser.socket_id = socket_id
    prevUser.status = 'online'
    this.updateObjList(user_token, prevUser)
  }

  setOffline (user_token) {
    const prevUser = this.copyObjList(user_token)
    prevUser.socket_id = ''
    prevUser.status = 'offline'
    this.updateObjList(user_token, prevUser)
  }
}

const users = new Users({
  users: new Map(),
  list: new Map()
})

module.exports = users

// объект user 
// {
//   token: 'user token',
//   data: {
//     first_name: 'name user',
//     last_name: 'last name user',
//     position: 'position user',
//   }
// }