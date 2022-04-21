const express = require('express');
const router = express.Router();

const res_wrap = require('../../tools/envelop');

/* GET users listing. */
router.get('/', function(req, res, next) {

  return res_wrap(res, 200, {users: {count: 0, users:[]}});

});

module.exports = router;
