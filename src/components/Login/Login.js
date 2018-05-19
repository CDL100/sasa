import React from 'react'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'

import http from '../../utils/HttpClient'
import './Login.scss'


export default class Login extends React.Component{

    state = {
        username : '',
        password : '',
    }

    change1(event){
        this.setState({username : event.target.value});
    } 
    change2(event){
        this.setState({password : event.target.value});
    } 
    getWord(){
        const formData = {
            username : this.state.username,
            password : this.state.password
        } 
        http.post('login',formData).then((res)=>{
            if(res.status == 'false'){ 
                console.log(res.status);
                window.localStorage.setItem('token', res.message);
                this.props.router.push({pathname: '/'});
            }
        })
    }   

    changeSubmit(){
        this.refs.btns.style.backgroundColor = '#F16E9E'
    }

    regs(e){
        let pVal = e.target.value;
        if(!/^1[3-8]\d{9}$/.test(pVal)){
            alert('手机号不合法');

			return false;
        }
    }


    render(){
        return(
            <div className="login">
                <div className="login_header">
                    <Link to="/user"><img src="src/images/login-left.png" /></Link>
                    <h2>登录</h2>
                    <Link to="/register"><h4>注册</h4></Link>
                </div>
                <div className="login-c"></div>
                <div className="login_main">
                    <input type="text" placeholder="手机号" onBlur={this.changeSubmit.bind(this)} onMouseLeave={this.regs} onChange={this.change1.bind(this)}/>
                    <div className="login_main_r">
                        <span>显示</span>
                        <input type="password" placeholder="密码"  onChange={this.change2.bind(this)}/>
                    </div>
                    <div className="login-cc">
                        忘记密码
                    </div>
                    <input type="submit" value="登录" className="btn" ref="btns" onClick={this.getWord.bind(this)}/>
                </div>
            </div>

        )
    }

}