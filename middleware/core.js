const  createError = require('http-errors');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  morgan = require('morgan');
const  express = require('express');
const errorHandler = require('./../tools/error-handler');
const  routes = require('./../routes/router');
const cors = require('cors');


const corsOptions = {
    origin: '*',
    methods: ['GET','PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS']
};

module.exports = function(app){
    
    if (process.env.NODE_ENV === 'development' ){
         app.use(morgan('dev'));
    }
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(process.env.NODE_ENV === 'production' ? cors() : cors(corsOptions));
    
    //static routes
    app.use(express.static(path.join(__dirname,'..','public')));
    app.use(express.static(path.join(__dirname,'..', 'public', 'images')));
    app.use('/main',express.static(path.join(__dirname,'..', 'public', 'html')));
    app.use('/api/v1', routes);
    
    //wildcard
    app.use('*',function(req, res, next) {
    next(createError(404));
    });

    // error handler at the end of the middleware chain
    app.use(errorHandler);
};