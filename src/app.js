import './libs/base/base.scss';
import './libs/font-awesome/font-awesome.css';



import React from 'react';
import ReactDOM from 'react-dom';
import {Router,hashHistory} from 'react-router';
import routes from './router/router.js'


ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('app')
)





