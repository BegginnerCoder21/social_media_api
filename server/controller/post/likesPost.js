const postModel = require("../../models/post");


const likesPost = async(req, res) => {

    const postId = req.params.id;
    const userId = req.body.userId;

    try {
        const post = await postModel.findById(postId);
        
        if(!post.likes.includes(userId)){

           await post.updateOne({$push: {likes: userId}});
           return res.status(201).json({Message: "like reussi."});
        }
        
        await post.updateOne({$pull: {likes: userId}});
        res.status(201).json({Message: "dislike reussi."});

        
    } catch (error) {
        console.log(error);
        res.json(error);
    }

}

module.exports = likesPost;