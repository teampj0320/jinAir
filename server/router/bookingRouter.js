import express from 'express';
import * as controller from '../controller/bookingController.js';

const router = express.Router();

router.post('/availability', controller.getOnewayList);

export default router;