import React,{Component} from 'react';

import Header from './Header/Header.js';
import Content from './Content/Content.js';
import FixNav from '../FixNav/FixNav.js';
import './Type.scss';

export default class Type extends Component{
    render(){
        return (
            <div className="zz-type">
                <Header/>
                <Content/>
                <FixNav/>
                  
            </div>
        )
    }
}
