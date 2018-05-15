import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LognIn from './components/LognIn';
import User from './components/User';
import Lottories from './components/Lottories';
import LotoHolder from './components/loto/LotoHolder';

import registerServiceWorker from './registerServiceWorker';


const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(middleware);

ReactDOM.render(
  <Provider store = {store}>
    <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/lognin" component={LognIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/user" component={User}/>
            <Route path="/lottories" component={Lottories}/>
          <Route path="/5from36" component={LotoHolder}/>
          
          </Switch>
        </App>
      </Router>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
