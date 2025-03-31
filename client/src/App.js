import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Mypage from './pages/Mypage.jsx';
import MobileLayout from './pages/MobileLayout.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/mypage' element={<Mypage />} />
        {/* <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />  */}
      </Route>

      <Route element={<MobileLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


