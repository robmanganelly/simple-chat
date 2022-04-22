const  createError = require('http-errors');

const envelop = require('./envelop');


module.exports = function(err, req, res, next) {

    console.log(err); // TODO remove this after testing
    
    error = process.env.NODE_ENV === 'development' ? err : {status: err.status, message: err.message } ;

    if (!err.status){
        error = createError(500);
    }
  
    return envelop(res,error.status,error,error.message);
  };