import express from 'express';
import * as controller from '../controller/chatbotController.js';

const router = express.Router();
router.post('/',controller.getCountry);


export default router;
