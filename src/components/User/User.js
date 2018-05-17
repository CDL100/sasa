import React,{Component} from 'react';


import FixNav from '../FixNav/FixNav.js';
import './User.scss';

export default class User extends Component{
    render(){
        return (
            <div className="kz-user">
                <FixNav/>
            </div>
        )
    }
}