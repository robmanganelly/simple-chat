const createError = require('http-errors');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 300,
        required: [true, 'a username is required'],
        validate:{
            validator: (username)=> /^\S+$/.test(username),
            message:'space characters not allowed'
        }

    },
    email: {
        unique: true,
        type: String,
        required: [true, 'an email is required'],
        trim: true,
        lowercase:true,
        validate:{
            validator: function(email){return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);},
            message:'invalid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [12,'required 12 characters or more '],
        maxlength: [300,'required 300 characters or less '],
        validate:{
            validator: function(password){ 
                return (/^\S{12,}$/.test(password) && /\d/.test(password) && /\w/.test(password) && /\W/.test(password));
            },
            message:'use digits, symbols, uppercase and lowercase letters, don\'t use space characters'
        }
        
    }

});


module.exports = mongoose.model('User', schema);