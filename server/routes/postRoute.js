const express = require('express');
const createPost = require('../controller/post/createPost');
const postRouter = express.Router();

postRouter.route('/create-post').post(createPost);

module.exports = postRouter;