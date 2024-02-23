const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true,
        min:3
    },
    email: {
        type : String,
        required :true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilPicture: {
        type: String,
        default: ''
    },
    coverPicture: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = userSchema;

module.exports = User;