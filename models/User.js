const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    role: {
        type: String
    },
});

module.exports = mongoose.model('Users', UserScheme);