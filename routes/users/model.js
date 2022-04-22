const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'a username is required']
    },
    email: {
        type: String,
        required: [true, 'an email is required']
    },

});

module.exports = mongoose.model('users', schema);