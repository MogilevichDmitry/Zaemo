import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import HomeFilter from './components/HomeFilter.jsx';
import RegisterStepOne from './components/Register/StepOne.jsx';
import RegisterStepTwo from './components/Register/StepTwo.jsx';
import RegisterStepThee from './components/Register/StepThree.jsx';
import SearchResult from './components/SearchResult.jsx';
import Modal from './components/ui/Desktop/ModalWindow.jsx';
import Settings from './components/Settings/Settings.jsx';
import MyPasses from './components/MyPasses.jsx';
import PassActiveMobile from './components/ui/Mobile/MyPass/Active.jsx'
import PassExpiredMobile from './components/ui/Mobile/MyPass/Expired.jsx'
import PassReadyMobile from './components/ui/Mobile/MyPass/Ready.jsx'
import PassActive from './components/ui/Desktop/MyPass/Active.jsx';
import PassReady from './components/ui/Desktop/MyPass/Ready.jsx';
import PassExpired from './components/ui/Desktop/MyPass/Expired.jsx';
import GymDetail from './components/GymDetail.jsx';
import WorkoutPreferences from './components/Settings/WorkoutPreferences.jsx';
import PaymentInfo from './components/Settings/PaymentInfo.jsx';
import PersonalInfo from './components/Settings/PersonalInfo.jsx';
import PurchaseSelectPass from './components/Purchase/SelectPass.jsx';
import PurchasePaymentInfo from './components/Purchase/PaymentInfo.jsx';
import PurchaseCheckout from './components/Purchase/Checkout.jsx';

export default () => {
  return <Route>
    <Route path="/" component={Home} />
    <Route path="home" component={Home} />
    <Route path="login" component={Login} />
    <Route path="home-filter" component={HomeFilter} />
    <Route path="search-result" component={SearchResult} />
    <Route path="gym-detail" component={GymDetail} />

    <Route path="register">
      <IndexRoute component={RegisterStepOne} />
      <Route path="step-2" component={RegisterStepTwo} />
      <Route path="step-3" component={RegisterStepThee} />
    </Route>

    <Route path="my-passes">
      <IndexRoute component={MyPasses} />
      <Route path="active" component={PassActive} />
      <Route path="ready" component={PassReady} />
      <Route path="expired" component={PassExpired} />

      <Route path="mobile">
        <IndexRoute component={MyPasses} />
        <Route path="active" component={PassActiveMobile} />
        <Route path="ready" component={PassReadyMobile} />
        <Route path="expired" component={PassExpiredMobile} />
      </Route>
    </Route>

    <Route path="purchase">
      <IndexRoute component={PurchaseSelectPass} />
      <Route path="payment" component={PurchasePaymentInfo} />
      <Route path="checkout" component={PurchaseCheckout} />
    </Route>

    <Route path="settings">
      <IndexRoute component={Settings} />
      <Route path="workout" component={WorkoutPreferences} />
      <Route path="payment" component={PaymentInfo} />
      <Route path="personal" component={PersonalInfo} />
    </Route>
  </Route>
}
