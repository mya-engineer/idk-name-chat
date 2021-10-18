const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()

const server = http.createServer(app)

const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
})

server.listen(8888, () => {
  console.log('listening on *:8888')
})
