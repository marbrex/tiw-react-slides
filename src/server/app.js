import path from 'path'
import { fileURLToPath } from 'url'
import { createServer } from 'http'

import express from 'express'
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'

if (process.env.NODE_ENV !== 'production') dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const server = createServer(app)
const io = new Server(server)

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const DIST_DIR = path.join(dirname, '../../dist')
app.use(express.static(DIST_DIR))

app.all('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, '/index.html'))
})

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('slideChanged', msg => {
    console.log('slideChanged', msg)
    socket.broadcast.emit('slideChanged', msg)
  })
})

server.listen(port, () => {
  process.stdout.write(`Server started on port: ${port}\n`)
})
