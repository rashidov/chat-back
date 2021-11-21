class Rooms {
  constructor (options) {
    this.rooms = options.rooms
    this.meta = options.meta
  }

  create (room) {
    this.rooms.set(room.token, {...room.data})
  }

  add (room_token, user_token) {                  // не актуальный метод
    const prevRoom = this.rooms.get(room_token)
    prevRoom.users.push(user_token)
    this.rooms.delete(room_token)
    this.rooms.set(room_token, {...prevRoom})
  }

  room (token) { 
    return this.rooms.get(token)
  }

  size () {
    return this.rooms.size
  }

  addUserInRoom (room_token, user_token) {
    const prevMetaRoomUsers = this.meta.room_users.get(room_token)
    prevMetaRoomUsers.push(user_token)
    this.meta.room_users.delete(room_token)
    this.meta.room_users.set(room_token, user_token)
  }
}

const rooms = new Rooms({
  rooms: new Map(),
  meta: {
    room_users: new Map()
  }
})

module.exports = rooms

// объект room
// {
//   num: 0,
//   name: 'Бухгалтерия',
//   filial: 'РЦ ХАнская',
//   type: 'corporate',
//   roomToken: 'room1',
//   messages: []
// }