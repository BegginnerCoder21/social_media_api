const userModel = require('../../models/user');
const bcrypt = require('bcrypt');
const updateUser = async(req, res) => {
        const idUser = req.params.id;
        const {description, password, password_confirmation} = req.body;
    
        if(!password || !password_confirmation){
            return res.status(404).json({"Error" : "Le mot de passe ne peut pas vide"});
        }

        if(password !== password_confirmation){
            return res.status(404).json({"Error" : "Les mots de passe sont differents"});
        }

    try {
        const userExist = await userModel.exists({_id : idUser});
        if(!userExist){
            return res.status(404).json({"Error" : "Utilisateur non trouvé."});
        }
       
        const hashedpassword = await bcrypt.hash(password,10);
        const update_user = await userModel.findByIdAndUpdate(idUser, {$set: {password : hashedpassword,description}},{new: true}); 
        
        return res.status(200).json({"Success" : "Mise a jour effectué avec succès",update_user});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = updateUser;