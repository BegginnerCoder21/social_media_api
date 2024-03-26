const express = require('express');
const createPost = require('../controller/post/createPost');
const updatePost = require('../controller/post/updatePost');
const postRouter = express.Router();

postRouter.route('/create-post').post(createPost);
postRouter.route('/update-post/:id').put(updatePost);

module.exports = postRouter;