import React, {Component} from 'react';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'

import './FixNav.scss';

export default class FixNav extends Component{
    static defaultProps = {
        data:[
            {name:'首页分类',icon:'fa fa-home',path:'/'},
            {name:'分类',icon:'fa fa-th-list',path:'/type'},
            {name:'限时特卖',icon:'fa fa-clock-o',path:'/special'},
            {name:'购物车',icon:'fa fa-shopping-cart',path:'/cart'},
            {name:'我的',icon:'fa fa-user',path:'/user'}
        ]
    }
    render(){
        return (
            <div className="zz-FixNav">
                <ul>
                    {
                        this.props.data.map((item)=>{
                            return(
                                <Link to={item.path} key={item.path} className={item.path}>
                                    <li>
                                        <i className={item.icon}></i>
                                        <span>{item.name}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        // /user、/home
        let path = browserHistory.getCurrentLocation().hash.slice(1)
        $('.zz-FixNav a').map(function(i,item){
            if(item.className == path){   
                item.classList.add('fixActive');
            }
        })
    }
}
