const express = require('express');
const userRouter = express.Router();


userRouter.route('/getUser').get();

module.exports = userRouter;
