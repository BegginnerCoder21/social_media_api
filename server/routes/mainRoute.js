const express = require('express');
const router = express.Router();
const authRouter = require('./authRoute');
const userRouter = require('./userRoute')

router.use('/auth',authRouter);
router.use('/user',userRouter);

module.exports = router;