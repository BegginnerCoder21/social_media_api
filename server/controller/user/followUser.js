const userModel = require('../../models/user');


const followUser = async(req, res) => {
    const idCurrentUser = req.params.id;
    const idUser = req.body.id; 

    if(idCurrentUser == idUser){
        return res.status(401).json({"Error" : "Vous ne pouvez pas vous suivre vous même !"});
    }

    try {
        const currentUser = await userModel.findById(idCurrentUser);
        const user = await userModel.findById(idUser);

        if(user.followers.includes(currentUser.id)){
            return res.status(401).json({"Error" : "Vous le suivez déjà !"});
        }

        const updatedCurrentUser = await currentUser.updateOne({$push : {followings : idUser}}, {new : true});
        const updatedUser = await user.updateOne({$push : {followers : idCurrentUser}}, {new : true});

        return res.status(202).json({updatedCurrentUser,updatedUser});

    } catch (error) {

        console.log(error);
        return res.status(404).json({"Error" : "Utilisateur non trouvé !"});
    }
    
}

module.exports = followUser;