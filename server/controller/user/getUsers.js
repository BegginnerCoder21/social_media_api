const userModel = require('../../models/user');

const getUsers = async(req,res) => {

    try {
        const allUsers = await userModel.find({});

        return res.status(202).json(allUsers);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

module.exports = getUsers;