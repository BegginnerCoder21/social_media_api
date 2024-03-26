const postModel = require('../../models/post');
const userModel = require('../../models/user');

const getProfilUserPosts = async(req, res) => {

    const userId = req.body.userId;
    try {

        const current_user = await userModel.findById(userId);
        const user_post = await postModel.find({userId: current_user._id});
        // console.log(user_post);
        followings_post = await Promise.all(current_user.followings.map((followings_id) => {
            // console.log(followers_id);
            return postModel.find({userId: followings_id});
        }));

        const posts = user_post.concat(followings_post);
        // console.log(posts);

        return res.status(200).json({posts})

        
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = getProfilUserPosts;