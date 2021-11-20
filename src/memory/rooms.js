class Rooms {
  constructor (options) {
    this.rooms = options.rooms
  }

  set create (room) {
    this.rooms.set(room.token, {...room.data})
  }

  add (room_token, user_token) {
    const prevRoom = this.rooms.get(room_token)
    prevRoom.users.push(user_token)
    this.rooms.delete(room_token)
    this.rooms.set(room_token, {...prevRoom})
  }

  room (token) { 
    return this.rooms.get(token)
  }

  get size () {
    return this.rooms.size
  }
}

const rooms = new Rooms({
  rooms: new Map()
})

module.exports = rooms

// объект room
// {
//   token: 'md5(title room)',
//   data: {
//     name: 'title room',
//     users: ['user1 token', 'user2 token']
//   }
// }