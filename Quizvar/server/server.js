const express = require('express')
const cors = require('cors')
const router = require('./router/quiz')


const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api', router)

server.listen(8787, () => {
    console.log('Server is running!');
})