const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    },
    description: {
        type: String
    },
    from: {
        type : String
    },
    relationship: {
        type : String,
        enum: [1, 2, 3]
    },
    followers:{
        type: Array,
        default : []
    },
    unfollowers: {
        type: Array,
        default: []
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;