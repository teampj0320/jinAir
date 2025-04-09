import express from "express";
import * as controller from '../controller/mypageController.js';

router 
    .post('/product', controller.getMyInfo);

export default router;