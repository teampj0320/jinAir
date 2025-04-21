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
import CustomTicket from './pages/CustomTicket.jsx';
import BookingOneWay from './pages/booking/BookingOneWay.jsx';
import BookingPassenger from './pages/booking/BookingPassenger.jsx';
import BookingSelectSeat from './pages/booking/BookingSelectSeat.jsx';
import BookingPayment from './pages/booking/BookingPayment.jsx';
import BookingGo from './pages/booking/BookingGo.jsx';
import BookingBack from './pages/booking/BookingBack.jsx';
import BookingCheckout from './pages/booking/BookingCheckout.jsx';
import AdminLayout from'./pages/AdminLayout.jsx';
import AdminLogin from'./component/admin/AdminLogin.jsx';
import AdminFlightList from'./component/admin/AdminFlightList.jsx';
import AdminFlightAdd from'./component/admin/AdminFlightAdd.jsx';
import AdminNotice from'./component/admin/AdminNotice.jsx';
import AdminNoticeAdd from'./component/admin/AdminNoticeAdd.jsx';
import AdminQna from'./component/admin/AdminQna.jsx';
import ScrollToTop from './pages/ScrollToTop.jsx'
import QnaUpload from './pages/Mypage/QnaUpload.jsx';
import AdminQnaComment from './component/admin/AdminQnaComment.jsx';
import SuccessPage from './component/payments/Success.jsx';
import FailPage from './component/payments/Fail.jsx'; 

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
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
        <Route path='/mypage/qnaUpload' element={<QnaUpload />} />
        <Route path='/CustomTicket' element={<CustomTicket />} />
        <Route path='/booking/availabilityList/oneWay' element={<BookingOneWay />} />
        <Route path='/booking/availabilityList/go' element={<BookingGo />} />
        <Route path='/booking/availabilityList/back' element={<BookingBack />} />
        <Route path='/booking/passenger' element={<BookingPassenger />} />
        <Route path='/booking/selectSeat' element={<BookingSelectSeat />} />
        <Route path='/booking/beforePayment' element={<BookingPayment />} />
        <Route path='/booking/afterPayment' element={<BookingCheckout />} />
        <Route path='/booking/success' element={<SuccessPage />} />
        <Route path='/booking/fail' element={<FailPage />} />
        {/* <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />  */}
      </Route>

      <Route element={<MobileLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/find/:finfo' element={<FingdUserInfo />} />
        <Route path='/join/:part' element={<SignupFunnel />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/flight' element={<AdminFlightList />} />
        <Route path='/admin/flight/add' element={<AdminFlightAdd />} />
        <Route path='/admin/notice' element={<AdminNotice />} />
        <Route path='/admin/notice/add' element={<AdminNoticeAdd />} />
        <Route path='/admin/qna' element={<AdminQna />} />
        <Route path='/admin/qnaComment/:qid' element={<AdminQnaComment />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


