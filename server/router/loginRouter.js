import React from 'react';
import express from 'express';
import * as controller from '../controller/loginController.js';

const router = express.Router();

router.post('/login', controller.checkLogin)
      .post('/authcode', controller.getAuthCode)
      .post('/findId', controller.getFindId)
      .post('/findPwd', controller.getFindPwd)
      .post('/idcheck', controller.getIdCheck)
      .post('/signup', controller.setSignup);

export default router;
