const { default: mongoose } = require('mongoose');
const userModel = require('../../models/user');

const destroyUser = async(req, res) => {
    
  
    const idUser = await userModel.exists({_id: req.params.id});
    
    if(!idUser){
        return res.status(404).json({'Error' : "Utilisateur non trouvé."})
    }
    
    try {
        await userModel.findByIdAndDelete(idUser);

        return res.status(200).json({'success' : "L'utilisateur a bien été supprimé"});
        
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

module.exports = destroyUser;