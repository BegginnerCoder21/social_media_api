const express = require('express');
const updateUser = require('../controller/user/updateUser');
const destroyUser = require('../controller/user/destroyUser');
const getUsers = require('../controller/user/getUsers');
const userRouter = express.Router();


userRouter.route('/updateUser/:id').put(updateUser);
userRouter.route('/destroyUser/:id').delete(destroyUser);
userRouter.route('/getUsers').get(getUsers);

module.exports = userRouter;
