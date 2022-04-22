const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    members:{
        required: true,
        type:[mongoose.Schema.Types.ObjectId]
    }
});

module.exports = mongoose.model('Room',schema);