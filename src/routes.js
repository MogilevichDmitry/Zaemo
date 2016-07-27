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
import Purchase from './components/ui/Desktop/Purchase.jsx';
import Settings from './components/ui/Desktop/Settings.jsx';
import MyPasses from './components/MyPasses.jsx';
import ActivePassMobile from './components/ui/Mobile/MyPasses/Active.jsx'
import PassActive from './components/ui/Desktop/MyPass/Active.jsx';
import PassReady from './components/ui/Desktop/MyPass/Ready.jsx';
import PassExpired from './components/ui/Desktop/MyPass/Expired.jsx';

import GymDetail from './components/GymDetail.jsx';

export default () => {
  return <Route>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
    <Route path="home-filter" component={HomeFilter} />
    <Route path="search-result" component={SearchResult} />x
    <Route path="gym-detail" component={GymDetail} />
    <Route path="modal" component={Modal} />
    <Route path="purchase" component={Purchase} />
    <Route path="settings" component={Settings} />
    <Route path="my-passes" component={MyPasses} />
    <Route path="my-passes-mobile" component={ActivePassMobile} />
    <Route path="pass-active" component={PassActive} />
    <Route path="pass-ready" component={PassReady} />
    <Route path="pass-expired" component={PassExpired} />

    <Route path="register">
      <IndexRoute component={RegisterStepOne} />
      <Route path="step-2" component={RegisterStepTwo} />
      <Route path="step-3" component={RegisterStepThee} />
    </Route>

  </Route>
}
