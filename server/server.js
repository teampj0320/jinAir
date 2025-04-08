import express from 'express';
import cors from 'cors';
import path from 'path';
import loginRouter from './router/loginRouter.js';

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

// middle ware

// login
server.use('/member', loginRouter);


server.listen(port, () => {
    console.log('start ----->>', port);
});  