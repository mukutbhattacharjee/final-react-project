import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeComponent from "./components/home/HomeComponent";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginComponent from "./components/login/LoginComponent";
import DashboardComponent from "./components/dashboard/DashboardComponent";

import {createStore} from 'redux';
import allReducers from './reducers/all.reducers';
import {Provider} from 'react-redux';
import App from "./components/App";


const store = createStore(allReducers);
// ReactDOM.render(<BrowserRouter >
//                     <Switch>
//                         <Route exact path = '/' component = {HomeComponent}/>
//                         <Route exact path = '/login' component = {LoginComponent}/>
//                         <Route exact path = '/dashboard' component = {DashboardComponent}/>
//                     </Switch>
//                 </BrowserRouter>
//     , document.getElementById('root'));


ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
