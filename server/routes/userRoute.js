const express = require('express');
const updateUser = require('../controller/user/updateUser');
const destroyUser = require('../controller/user/destroyUser');
const getUsers = require('../controller/user/getUsers');
const getSpecificUser = require('../controller/user/getSpecificUser');
const followUser = require('../controller/user/followUser');
const userRouter = express.Router();


userRouter.route('/updateUser/:id').put(updateUser);
userRouter.route('/destroyUser/:id').delete(destroyUser);
userRouter.route('/getUsers').get(getUsers);
userRouter.route('/getSpecificUser/:id').get(getSpecificUser);
userRouter.route('/follow/:id').put(followUser);

module.exports = userRouter;
