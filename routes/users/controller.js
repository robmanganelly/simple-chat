const res_wrap = require('../../tools/envelop');

const schema = require('./model');

exports.getUsers = async (req, res, next )=>{

    // just for admin purposes after dev 
    const users = await schema.find();

    return res_wrap(res, 200, {users: {count: users.length, users}});
  
  };

exports.postUsers = async(req, res, next)=>{
    const newUser = schema.create({});

    return res_wrap(res, 201, {user: newUser});

};