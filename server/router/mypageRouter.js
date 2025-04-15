import express from "express";
const router = express.Router();
import * as controller from '../controller/mypageController.js';

router 
    .post('/getMyInfo', controller.getMyInfo)
    .post('/updateMyInfo', controller.updateMyInfo )
    .post('/checkPwd', controller.checkPwd )
    .post('/getMyRes', controller.getMyRes )
    .post('/getInterest', controller.getInterest )
    .post('/updateInterest', controller.updateInterest );

export default router;