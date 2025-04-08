import React from 'react';
import express from 'express';
import * as controller from '../controller/loginController.js';

const router = express.Router();

router.post('/login', controller.checkLogin);

export default router;
