import React from 'react';
import {
  BrowserRouter as Router, Redirect,
  Route
} from 'react-router-dom';
import {lifecycle} from 'recompose';
import { Provider } from "react-redux";
import _ from "lodash";

import store from "./store";
import * as ROUTES from './constants/routes';
import Home from './components/Home';
import Login from './components/Login';
import Quiz from './components/Quiz/container';
import SignUp from './components/SignUp';
import LuckyDraw from './components/LuckyDraw';
import Admin from './components/Admin';
import Otp from './components/Otp';
import VerifyOtp from './components/VerifyOtp'
import SubQuiz from './components/SubQuiz';



const AppStateLess = () => (
  <Provider store={store}>
    <Router>
      <Route path={ROUTES.LOG_IN} component={Login}/>
      <Route path={ROUTES.SIGN_UP} component={SignUp}/>
      <Route path={ROUTES.QUIZ} component={Quiz}/>
      <Route path={ROUTES.HOME} component={Home}/>
      <Route path={ROUTES.LUCKY_DRAW} component={LuckyDraw}/>
      <Route path={ROUTES.ADMIN} component={Admin}/>
      <Route path={ROUTES.OTP} component={Otp}/>
      <Route path={ROUTES.VERIFY_OTP} component={VerifyOtp}/>
      <Route path={ROUTES.SUB_QUIZ} component={SubQuiz}/>
    </Router>
  </Provider>
);

const App = lifecycle({
  componentDidMount() {

  }
})(AppStateLess);

export default App;