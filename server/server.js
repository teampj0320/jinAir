import express from 'express';
import cors from 'cors';
import path from 'path';
import mypageRouter from './router/mypageRouter.js'
import uploadRouter from './router/uploadRouter.js'

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use("/images", express.static(path.join("images")));

// middle ware
server.use('/mypage', mypageRouter)
server.use('/uploads', uploadRouter);


server.listen(port, () => {
    console.log('start ----->>', port);
});  