const express = require('express');
const router = express.Router();
const authRouter = require('./authRoute');
const userRouter = require('./userRoute');
const postRouter = require('./postRoute');

router.use('/auth',authRouter);
router.use('/user',userRouter);
router.use('/post',postRouter);

module.exports = router;