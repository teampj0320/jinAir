import express from "express";
const router = express.Router();
import * as controller from '../controller/mypageController.js';

router 
    .post('/getMyInfo', controller.getMyInfo)
    .post('/updateMyInfo', controller.updateMyInfo )
    .post('/checkPwd', controller.checkPwd )
    .post('/getMyRes', controller.getMyRes );

export default router;