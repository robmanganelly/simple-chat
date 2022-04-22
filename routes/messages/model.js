const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    text:{
        type: String,
        maxlength: 3600,
        required: true,
        trim: true
    },
    sent:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Message',schema);