import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import HomeFilter from './components/HomeFilter.jsx';
import RegisterStepOne from './components/Register/StepOne.jsx';
import RegisterStepTwo from './components/Register/StepTwo.jsx';
import RegisterStepThee from './components/Register/StepThree.jsx';
import SearchResult from './components/SearchResult.jsx';
import GymDetailDesktop from './components/GymDetail/GymDetailDesktop.jsx';
import GymDetailMobile from './components/GymDetail/GymDetailMobile.jsx';
import GymDetail from './components/GymDetail/index.jsx';

export default function() {
  return <Route>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
    <Route path="home-filter" component={HomeFilter} />
    <Route path="search-result" component={SearchResult} />
    <Route path="gym-detail" component={GymDetail} />
    <Route path="gym-detail-mobile" component={GymDetailMobile} />
    <Route path="gym-detail-desktop" component={GymDetailDesktop} />

    <Route path="register">
      <IndexRoute component={RegisterStepOne} />
      <Route path="step-2" component={RegisterStepTwo} />
      <Route path="step-3" component={RegisterStepThee} />
    </Route>

  </Route>
}
