import express from 'express';
import cors from 'cors';
import path from 'path';
<<<<<<< HEAD
import loginRouter from './router/loginRouter.js';
=======
import mypageRouter from './router/mypageRouter'
>>>>>>> b8ea22d3af378f52744b339df11aa928d128f539

const server = express();
const port = 9000;

//common
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


<<<<<<< HEAD
// login
server.use('/member', loginRouter);
=======
// middle ware
server.use('/mypage', mypageRouter)
>>>>>>> b8ea22d3af378f52744b339df11aa928d128f539


server.listen(port, () => {
    console.log('start ----->>', port);
});  