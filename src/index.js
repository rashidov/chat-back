require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http').Server(app)
const useSocket = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')
const controllers = require('./controllers')
// const routes = require('./routes')
const memory = require('./memory')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: true}))
// app.use('/api', routes)

const io = useSocket(http, {
  cors: {
    origin: "http://localhost:3000"
  }
})

io.on('connection', async socket => {
  const id = socket.id
  const options = {id, socket}

  console.log('\n conncted user: id -', id) // временно
  
  controllers.user(options)
  controllers.room(options)
  controllers.message(options)
})

app.get('/memory/get-users/:tokenUser', (res, req) => {
  const user = memory.users.get(res.params.tokenUser)
  console.log(user)
  req.status(200).send('user ---->  view console')
})

memory.rooms.create('room1', {
  num: 0,
  name: 'Бухгалтерия',
  filial: 'РЦ ХАнская',
  type: 'corporate',
  roomToken: 'room1',
  messages: []
})

http.listen(8000, (err) => {
  if(err) throw Error(err)
  console.log('Server is started!')
})