import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';

/* 대충 넣어놨으니까 알아서 수정하기~~~~~~~ */
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


