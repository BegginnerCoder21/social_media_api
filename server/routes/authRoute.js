const express = require('express');
const register = require('../controller/authentication/register');
const authRouter = express.Router();

authRouter.route('/register').post(register);

module.exports = authRouter;