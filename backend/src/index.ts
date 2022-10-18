import {Server, Socket} from "socket.io";

const http = require('http')

const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())

//Routes
app.use('/api/messages', require('./routes/message.route'))

const PORT = process.env.MONGO_URI || 5000

const server = http.createServer(app)

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        server.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e: any) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

//Socket
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

io.on('connection', (socket: Socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on('send_message', (message) => {
        io.sockets.emit('receive_message', {
            content: message
        })
    })

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected...`)
    })
})


start()



