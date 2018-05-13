import React,{Component} from 'react';
import './Home.scss';


import Header from './Header/Header.js';
import FixNav from '../FixNav/FixNav.js';

export default class home extends Component{
    render(){
        return (
            <div className="zz-home">
                <Header/>
                <FixNav/>
            </div>
        )
    }
}