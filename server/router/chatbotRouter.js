import express from 'express';
import * as controller from '../controller/chatbotController.js';

const router = express.Router();
router.post('/',controller.getCountry);
router.post('/searchSchedule',controller.searchSchedule);
router.post('/getSchedule',controller.getSchedule);
router.post('/searchAirplane',controller.searchAirplane);
router.post('/searchMonthCheap',controller.searchMonthCheap);
router.post('/searchReservation',controller.searchReservation);
router.post('/getReservation',controller.getReservation);
router.post('/QnaUpload',controller.QnaUpload);
router.post('/dbQnaupload',controller.registerQna );

export default router;
