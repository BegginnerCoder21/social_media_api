const express = require('express');
const createPost = require('../controller/post/createPost');
const updatePost = require('../controller/post/updatePost');
const destroyPost = require('../controller/post/destroyPost');
const likesPost = require('../controller/post/likesPost');
const getAllPosts = require('../controller/post/getAllPost');
const getSpecificPost = require('../controller/post/getSpecificPost');
const postRouter = express.Router();

postRouter.route('/create-post').post(createPost);
postRouter.route('/all-posts').get(getAllPosts);
postRouter.route('/specific-post/:id').get(getSpecificPost);
postRouter.route('/update-post/:id').put(updatePost);
postRouter.route('/like-dislike-post/:id').put(likesPost);
postRouter.route('/destroy-post/:id').delete(destroyPost);

module.exports = postRouter;