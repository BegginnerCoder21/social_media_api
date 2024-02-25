const userModel = require('../../models/user');
const bcrypt = require('bcrypt');

const login = async(req, res) => {
    const {password, email} = req.body;

    if(!password || !email){
        return res.status(422).json({"Error" : "Aucun champ ne doit rester vide."})
    }

    try {

        const userExist = await userModel.findOne({email : req.body.email})
        console.log(userExist);
        if(!userExist){
            return res.status(404).json({"Error" : "Email ou mot de passe incorrect."});
        }
        console.log(userExist);
        const loginUser = await bcrypt.compare(password, userExist.password);
        
        if(!loginUser){
            return res.status(404).json({"Error" : "Email ou mot de passe incorrect."});
        }

        return res.status(200).json({'Success' : "Vous être connecté."})
    } catch (error) {
        console.log(error);
        return res.status(500).json({'Error' : 'connexion echoué.'})
    }
}

module.exports = login; 