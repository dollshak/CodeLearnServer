const mongoose = require('mongoose');

const SessionScheme = mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },

    userId:{
        type: String,
        required: true,
    },
    codeBlockId:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Sessions', SessionScheme);