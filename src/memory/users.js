
class Users {
  constructor (options) {
    this.users = options.users
  }

  set add (user) {
    this.users.set(user.token, {...user.data})
  }

  user (token) {
    return this.users.get(token)
  }

  get size () {
    return this.users.size
  }
}

const users = new Users({
  users: new Map()
})

module.exports = users

// объект user 
// {
//   token: 'user token',
//   data: {
//     first_name: 'name user',
//     last_name: 'last name user',
//     position: 'position user'
//   }
// }