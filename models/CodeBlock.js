const mongoose = require('mongoose');

const CodeBlockScheme = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    code:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('CodeBlocks', CodeBlockScheme);