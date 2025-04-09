import express from 'express';
import cors from 'cors';
import path from 'path';
import loginRouter from './router/loginRouter.js';
import mypageRouter from './router/mypageRouter.js'

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


// login
server.use('/member', loginRouter);

// middle ware
server.use('/mypage', mypageRouter)


server.listen(port, () => {
    console.log('start ----->>', port);
});  