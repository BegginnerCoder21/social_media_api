const express = require('express');
const updateUser = require('../controller/user/updateUser');
const userRouter = express.Router();


userRouter.route('/updateUser/:id').put(updateUser);

module.exports = userRouter;
