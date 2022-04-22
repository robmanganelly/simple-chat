const express = require('express');
const router  = express.Router();

const users = require('./users/routes');
const messages = require('./messages/routes');
const rooms = require('./rooms/routes');

// outsourcing routes. 
router.use('/users', users);
router.use('/messages', messages);
router.use('/rooms', rooms);


module.exports = router;