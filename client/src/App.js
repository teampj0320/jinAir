import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import MobileLayout from './pages/MobileLayout.jsx';
import Login from './pages/Login.jsx';
import FingdUserInfo from '../src/component/member/FingdUserInfo.jsx';
import SignupFunnel from './pages/SignupFunnel.jsx';
//mypage
import MypageIndex from './pages/MypageIndex.jsx';
import MyReservation from './pages/Mypage/MyReservation.jsx';
import CheckIn from './pages/Mypage/CheckIn.jsx';
import MyInterest from './pages/Mypage/MyInterest.jsx';
import MyQna from './pages/Mypage/MyQna.jsx';
import ModifyInfo from './pages/Mypage/ModifyInfo.jsx';
import BookingOneWay from './pages/booking/BookingOneWay.jsx';
import BookingPassenger from './pages/booking/BookingPassenger.jsx';
import BookingSelectSeat from './pages/booking/BookingSelectSeat.jsx';
import BookingPayment from './pages/booking/BookingPayment.jsx';
import BookingGo from './pages/booking/BookingGo.jsx';
import BookingBack from './pages/booking/BookingBack.jsx';
import BookingCheckout from './pages/booking/BookingCheckout.jsx';
import ScrollToTop from './component/ScrollToTop.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/*스크롤을 항상 최상단으로 유지 */}
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          {/* mypage */}
          <Route path='/mypage/index' element={<MypageIndex />} />
          <Route path='/mypage/getReservation' element={<MyReservation />} />
          <Route path='/mypage/checkIn' element={<CheckIn />} />
          <Route path='/mypage/myInterest' element={<MyInterest />} />
          <Route path='/mypage/myQna' element={<MyQna />} />
          <Route path='/mypage/modifyInfo' element={<ModifyInfo />} />
          <Route path='/booking/availabilityList/oneWay' element={<BookingOneWay />} />
          <Route path='/booking/availabilityList/go' element={<BookingGo />} />
          <Route path='/booking/availabilityList/back' element={<BookingBack />} />
          <Route path='/booking/passenger' element={<BookingPassenger />} />
          <Route path='/booking/selectSeat' element={<BookingSelectSeat />} />
          <Route path='/booking/beforePayment' element={<BookingPayment />} />
          <Route path='/booking/afterPayment' element={<BookingCheckout />} />
          {/* <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />  */}
        </Route>

        <Route element={<MobileLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/find/:finfo' element={<FingdUserInfo />} />
          <Route path='/join/:part' element={<SignupFunnel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


