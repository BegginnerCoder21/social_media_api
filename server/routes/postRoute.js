const express = require('express');
const createPost = require('../controller/post/createPost');
const updatePost = require('../controller/post/updatePost');
const destroyPost = require('../controller/post/destroyPost');
const postRouter = express.Router();

postRouter.route('/create-post').post(createPost);
postRouter.route('/update-post/:id').put(updatePost);
postRouter.route('/destroy-post/:id').delete(destroyPost);

module.exports = postRouter;