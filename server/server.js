import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import loginRouter from './router/loginRouter.js';
import mypageRouter from './router/mypageRouter.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const server = express();
const port = 9000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') }); // 루트에 .env가 있을 경우

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