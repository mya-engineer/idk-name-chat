const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const BOT = { username: 'MYASHA-BOT~', avatar: 0, bot: true }

io.on('connection', socket => {
  socket.on('message', obj => {
    io.emit('message', obj)
  })

  socket.on('user', payload => {
    socket.user = payload.user
    io.emit('message', {
      message: `Welcome @${socket.user.username} on server!`,
      user: BOT,
    })
  })

  socket.on('disconnect', reason => {
    console.log(reason)
  })
})

server.listen(8888, () => {
  console.log('listening on *:8888')
})
