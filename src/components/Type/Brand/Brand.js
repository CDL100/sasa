import React from 'react';
import http from '../../../utils/HttpClient.js';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';

let result = [];
export default class Brand extends React.Component{
    state={
        dataset:[]
    }
    componentDidMount(){
        let az = 'abcdefghijklmnobqrstuvwxyz'
        http.get('brand').then((res) => {
            this.setState({dataset:res.data});
            //设置高度
            this.setState({height:document.getElementsByClassName("type")[0].children[0].clientHeight})
        }).catch((error) => {
           console.log(error)
        })
    }
    render(){
        let list;
        if(this.state.dataset){
            list=(
                this.state.dataset.map((item,idx)=>{
                    return(                        
                        <li key={idx} style={{height:this.state.height}}>
                            <Link to={'/goodslist/'}>
                                <span>{item.brand_name}</span>
                            </Link>
                        </li>                       
                    )
                })
           )
        }
        return (
            <ul>
                {list}
            </ul>
        )
    }
}
