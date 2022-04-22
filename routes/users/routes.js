const express = require('express');
const router = express.Router();

const res_wrap = require('../../tools/envelop');

const {getUsers, postUsers} = require('./controller');

/* GET users listing. */
router
.route('/')
.get(getUsers)
.post(postUsers);

module.exports = router;
