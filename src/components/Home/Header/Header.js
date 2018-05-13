import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return (
            <div className="h-header">
                <i className="fa fa-bell-o"></i>
                <img src="src/images/logo.jpg"/>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}
