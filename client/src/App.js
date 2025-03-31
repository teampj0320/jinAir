import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Mypage from './pages/Mypage.jsx';
<<<<<<< HEAD
import MobileLayout from './pages/MobileLayout.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
=======
import MyReservation from './pages/MyReservation.jsx';
>>>>>>> e4eba8706d39119626c76181bc72a64e58ffbdf0

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
<<<<<<< HEAD
        <Route path='/mypage' element={<Mypage />} />
        {/* <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />  */}
      </Route>

      <Route element={<MobileLayout />}>
        <Route path='/login' element={<Login />} />
=======
        <Route path='/mypage/index' element={<Mypage />} />
        <Route path='/mypage/getReservation' element={<MyReservation />} />
        {/* <Route path='/login' element={<Login />} />
>>>>>>> e4eba8706d39119626c76181bc72a64e58ffbdf0
        <Route path='/signup' element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


