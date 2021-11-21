const express = require('express')
const router = express.Router()
const messages_routes = require('./messages.routes')

router.use('/messages', messages_routes)

module.exports = router