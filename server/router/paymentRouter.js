import express from 'express';
import * as controller from '../controller/paymentController.js';

const router = express.Router();

router.post('/res', controller.payment);
router.post('/active', controller.active);

export default router;