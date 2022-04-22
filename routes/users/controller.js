const createError = require('http-errors');
const { catchAsync } = require('../../tools/catch-async');
const res_wrap = require('../../tools/envelop');

const schema = require('./model');

exports.getUsers = catchAsync(async (req, res, next )=>{

    // just for admin purposes after dev 
    const users = await schema.find();

    return res_wrap(res, 200, {users: {count: users.length, users}});
  
  });

exports.postUsers = catchAsync(async(req, res, next)=>{
  
  const {email, username} = req.body;
  
  // TODO restore this.
  // if (!email || !username){
  //   return next(createError(400, `${!!username?'email':'username'} is required`));
  // }

  const newUser = await schema.create({email, username});

  return res_wrap(res, 201, {user: newUser});

});