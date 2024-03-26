const postModel = require("../../models/post");


const destroyPost = async(req, res) => {
    
    const destroyId = req.params.id;
    
    try {
        
        const destroy_post = await postModel.findById(destroyId);
        
        await destroy_post.deleteOne();
        
        return res.status(200).json({"Success" : "Poste supprimé."});

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = destroyPost;