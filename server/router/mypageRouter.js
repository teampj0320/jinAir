import express from "express";
import * as controller from '../controller/mypageController.js';

router 
    .post('/getMyInfo', controller.getMyInfo);

export default router;