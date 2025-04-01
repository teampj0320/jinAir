import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Mypage from './pages/Mypage.jsx';
import MobileLayout from './pages/MobileLayout.jsx';
import Login from './pages/Login.jsx';
import FingUserInfo from '../src/component/member/FingUserInfo.jsx';
import Signup from './pages/Signup.jsx';
import MyReservation from './pages/MyReservation.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/mypage/index' element={<Mypage />} />
        <Route path='/mypage/getReservation' element={<MyReservation />} />
        {/* <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />  */}
      </Route>

      <Route element={<MobileLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/find/:finfo' element={<FingUserInfo />} />
        <Route path='/join/:jnum' element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


