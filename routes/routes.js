const express = require('express');
const router  = express.Router();

const users = require('./users/users');

// outsourcing routes. 
router.use('/users', users);


module.exports = router;