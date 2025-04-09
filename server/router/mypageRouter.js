import express from "express";
import * as controller from '../controller/mypageController.js';

const router = express.Router();

router.post('/product', controller.getMyInfo);

export default router;