import React from 'react';
import {Route, IndexRoute} from 'react-router';



import App from '../components/App/App.js';
import Home from '../components/Home/Home.js';
import Type from '../components/Type/Type.js';
import Special from '../components/Special/Special.js';
import Cart from '../components/Cart/Cart.js';
import User from '../components/User/User.js';
import Login from '../components/Login/Login.js';
import Register from '../components/Register/Register.js';


//path全为小写,组件名开头为大写
//路径为/时,Home为默认显示的组件
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/" component={Home} />
        <Route path="/type" component={Type} />
        <Route path="/special" component={Special} />
        <Route path="/cart" component={Cart} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Route>
)

export default routes;