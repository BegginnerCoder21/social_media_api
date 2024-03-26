const postModel = require("../../models/post");


const getSpecificPost = async(req, res) => {

   try {
    const post = await postModel.findById(req.params.id);

    return res.status(200).json({post: post});
   } catch (error) {
        console.log(error);
        res.json({Error: "Poste non trouvé!"})
   }
}

module.exports = getSpecificPost;