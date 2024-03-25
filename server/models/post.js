const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    likes:{
        type:Array,
        default: []
    }
},{
    timestamps: true
});

const postModel = mongoose.model("Post",postSchema);

module.exports = postModel;