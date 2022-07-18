const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const itemRoutes = require('./routes/itemsRoutes')
const reviewRoutes = require('./routes/reviewRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
//prefix for item routes
server.use('/api/v1/items', itemRoutes)

//prefix for review routes
server.use('/api/v1/reviews', reviewRoutes)

module.exports = server
