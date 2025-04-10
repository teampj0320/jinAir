import express from 'express';
import cors from 'cors';
import path from 'path';
import mypageRouter from './router/mypageRouter.js'

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


// middle ware
server.use('/mypage', mypageRouter)


server.listen(port, () => {
    console.log('start ----->>', port);
});  