import React,{Component} from 'react';


import FixNav from '../FixNav/FixNav.js';
import './Cart.scss';

export default class Cart extends Component{
    render(){
        return (
            <div className="dl-cart">
                <FixNav/>
            </div>
        )
    }
}