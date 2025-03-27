import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Mypage from './pages/Mypage.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/mypage' element={<Mypage />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


