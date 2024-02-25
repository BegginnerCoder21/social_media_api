const express = require('express');
const register = require('../controller/authentication/register');
const login = require('../controller/authentication/login');
const authRouter = express.Router();

authRouter.route('/register').post(register);

authRouter.route('/login').post(login);

module.exports = authRouter;