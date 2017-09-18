import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import {createStore} from 'redux';
import allReducers from './reducers/all.reducers';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./components/home/HomeComponent";
import LoginComponent from "./components/login/LoginComponent";
import RegisterComponent from "./components/register/RegisterComponent";
import DashboardComponent from "./components/dashboard/DashboardComponent";

const store = createStore(allReducers);

function getStore() {
    return store;
}

const Root = ({store}) => (
    <Provider store={getStore()}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/register" component={RegisterComponent} />
                <Route exact path="/dashboard" component={DashboardComponent} />
            </div>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(<Root/>,document.getElementById('root'));
registerServiceWorker();
