const userModel = require('../../models/user');

const getSpecificUser = async(req, res) => {
    try {
        const idUser = await userModel.exists({_id: req.params.id});
        console.log(idUser);
        if(!idUser){
            return res.status(404).json({"Error" : "Utilisateur non trouvé."});
        }

        const user = await userModel.findById(idUser);

        return res.status(202).json(user);
        
    } catch (error) {
        
        return res.status(404).json({Error : 'Utilisateur non trouvé.'});
    }
}

module.exports = getSpecificUser;