const userModel = require('../../models/user');
const bcrypt = require('bcrypt');

const register = async(req, res) => {
    const {username, email, password_confirmation} = req.body
    const newPassword = req.body.password;

    if(!username || !email || !newPassword || !password_confirmation){
        return res.status(422).json({"Error" : "Les champs ne doivent pas être vide."});
    }

    if(newPassword !== password_confirmation){
        return res.status(422).json({"Error" : "Les mots de passe sont differents."});
    }

     
    try {
        const usernameExist = await userModel.exists({username}).exec();
        if(usernameExist){
            return res.status(422).json({"Error" : "Le nom utilisateur existe déjà."});
        }
    
        const emailExist = await userModel.exists({email});
        if(emailExist){
            return res.status(422).json({"Error" : "L'email existe déjà."});
        }
     
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        newUser = await userModel.create({
            username: username,
            email: email,
            password: hashedPassword
        });

        const {password, ...others} = newUser._doc;

        return res.status(201).json(others);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = register;