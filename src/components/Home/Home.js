import React,{Component} from 'react';
import './Home.scss';

import Header from './Header/Header.js';
import FixNav from '../FixNav/FixNav.js';
import Content from '../Home/Content/Content.js'
import {Link} from 'react-router'


export default class home extends Component{
    render(){
        return (
        
            <div className="zz-home">
                <Header/>
                <Content/>
                <FixNav/>
        
            </div>
        
        )
    }
}

