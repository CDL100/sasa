import React,{Component} from 'react';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'

// import login from '../Login/Login.js'


import FixNav from '../FixNav/FixNav.js';
import './User.scss';

export default class User extends Component{

    // componentDidMount(){
    //     const username = login.state.username;
    //     if(window.localStorage.getItem('auth') == 'username'){
    //         $('.user-hb').empty().html(username);
    //     }

    // }

    render(){
        return (
            <div className="kz-user">
                <div className="user-h">
                    <div className="user-hr">
                        <span className="fa fa-cog"></span>
                        <span className="fa fa-bell-o"></span>
                    </div>
                    <img src="src/images/user.png" />
                    <div className="user-hb">
                        <Link to="/login" ><span>登录</span></Link>
                        <Link to="/register" ><span>注册</span></Link>
                    </div>
                </div>
                <div className="user-b">
                    <ul>
                        <li>
                            <i>0</i>
                            <span>我的收藏</span>
                        </li>
                        <li>
                            <i>0</i>
                            <span>浏览记录</span>
                        </li>
                        <li>
                            <i>0</i>
                            <span>积分中心</span>
                        </li>
                    </ul>
                </div>
                <div className="user-bc"></div>
                <div className="user-c">
                    <ul>
                        <li>
                            <i className="fa fa-sticky-note"></i>
                            <span>未付款</span>
                        </li>
                        <li>
                            <i className="fa fa-delicious"></i>
                            <span>已付款</span>
                        </li>
                        <li>
                            <i className="fa fa-navicon"></i>
                            <span>待评价</span>
                        </li>
                        <li>
                            <i className="fa fa-bullhorn"></i>
                            <span>到货通知</span>
                        </li>
                        <li>
                            <i className="fa fa-support"></i>
                            <span>售后记录</span>
                        </li>
                    </ul>
                </div>
                <div className="user-m">
                    <ul>
                        <li>
                            <img src="src/images/user-1.png" />
                            <span>我的订单</span> 
                        </li>
                        <div className="user-bc"></div>
                        <li>
                            <img src="src/images/user-2.png" />
                            <span>我的优惠券</span> 
                        </li>
                        <li>
                            <img src="src/images/user-3.png" />
                            <span>我的评价</span> 
                        </li>
                        <li>
                            <img src="src/images/user-4.png" />
                            <span>帮助中心</span> 
                        </li>
                        <li>
                            <img src="src/images/user-5.png" />
                            <span>专属绑定</span> 
                        </li>
                    </ul>
                </div> 
                <div className="user-bb"></div>
                <FixNav/>
            </div>
        )
    }
}