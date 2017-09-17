import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeComponent from "./components/home/HomeComponent";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginComponent from "./components/login/LoginComponent";

ReactDOM.render(<BrowserRouter >
                    <Switch>
                        <Route exact path = '/' component = {HomeComponent}/>
                        <Route exact path = '/login' component = {LoginComponent}/>
                    </Switch>
                </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
