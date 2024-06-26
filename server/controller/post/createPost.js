const postModel = require("../../models/post");

const createPost = async(req, res) => {

    const {userId, description, image} = req.body;

    if(!userId || !description || !image){
        return res.status(402).json({"Error" : "Aucun champ ne doit être vide."});
    }

    try {
        const newPost = new postModel({userId, description, image});

        await newPost.save();

        res.status(201).json(newPost);
        
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error de creation",
            err: error
        });
    }

}

module.exports = createPost;