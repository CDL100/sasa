import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return (
            <div className="t-header">
                <span>分类</span>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}