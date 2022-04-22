// the conditional execution was intended for dealing with differences on error format 
// if another validator used change the strings allowed

const createError = require("http-errors");

exports.catchAsync = (handler)=>{
    return (req, res, next) => {
        handler(req, res, next).catch( err => {

            //detect all error sources 

            // mongoose.
            if(!!err.errors && !!err._message){
                return next(createError(400,err.message));
            }

            // none of the previous
            return next(err);
        } );
    };
};


