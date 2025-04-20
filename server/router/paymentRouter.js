import express from 'express';
import * as controller from '../controller/paymentController.js';

const router = express.Router();

router.post('/res', controller.payment);
router.post('/fail', controller.payment);
router.post('/flight', controller.flight);

export default router;
