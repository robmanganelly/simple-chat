const express = require('express');
const router = express.Router();

const res_wrap = require("./../tools/envelop");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  return res_wrap(res, 200,{ working:"yes"} );

});

module.exports = router;
