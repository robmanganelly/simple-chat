const  express = require('express');

const  app = express();

// connection to db
require('./middleware/db.js');
// app core middleware  
require('./middleware/core')(app);



module.exports = app;
