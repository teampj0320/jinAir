import express from "express";
import * as controller from '../controller/mypageController.js';

const router = express.Router();

router.post('/product', controller.getMyInfo);
router 
    .post('/getMyInfo', controller.getMyInfo)
    .post('/updateMyInfo', controller.updateMyInfo )
    .post('/checkPwd', controller.checkPwd )
    .post('/getMyRes', controller.getMyRes );

export default router;