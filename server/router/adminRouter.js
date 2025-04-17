import express from 'express';
import * as controller from'../controller/adminController.js';

const router = express.Router();

router.post('/flight', controller.getFlightList);

export default router;