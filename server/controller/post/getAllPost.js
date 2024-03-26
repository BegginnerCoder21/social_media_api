const postModel = require("../../models/post");


const getAllPosts = async(req, res) => {

    try {
        const all_post = await postModel.find({});

        return res.status(200).json({allPost : all_post})
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = getAllPosts