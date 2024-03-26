const postModel = require("../../models/post");


const updatePost = async(req, res) => {

    const {description, image} = req.body
    const current_userId = req.body.userId;
    const postId = req.params.id;

    if(!current_userId || !description || !image){
        return res.status(402).json({"Error" : "Aucun champ ne doit être vide."});
    }

    try {
        
        const updatePost = await postModel.findById(postId);
        
        if(updatePost.userId.toString() !== current_userId){
            return res.status(401).json("Non authorisé !");
        }



        await updatePost.updateOne({description,image},{
            new: true
        });

        return res.status(200).json({Message: 'Poste mis a jour',updatePost});

    } catch (error) {
        console.log(error);
        res.json(error);
    }
    
}

module.exports = updatePost;