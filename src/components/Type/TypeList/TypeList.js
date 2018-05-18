import React from 'react'
import http from '../../../utils/HttpClient.js'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
//Element type is invalid：expected a string or a class/function...没有写export default



export default class TypeList extends React.Component{
    state={
        config:{
            url: 'type',
            data: '13'
        },
        dataset:[],
        data:'13',
        height:''
    }
    componentDidMount(){
        let {url, data, method='get'} = this.state.config;
        http[method](url, {data}).then((res) => {
            this.setState({dataset:res.data});
            //设置高度
            this.setState({height:document.getElementsByClassName("type")[0].children[0].clientHeight})
        }).catch((error) => {
           console.log(error)
        })
    }
    changeType(type){
        this.setState({config:{url:'type',data:type}},()=>{
            let {url, data, method='get'} = this.state.config;
            http[method](url, {data}).then((res) => {
                this.setState({dataset:res.data});
                //设置高度
                this.setState({height:document.getElementsByClassName("type")[0].children[0].clientHeight})
            }).catch((error) => {
               console.log(error)
            })
        })
    }
    render(){
        let list;
        let type;
        if(this.state.dataset[0]){
            type = this.state.dataset[0].type_id;
            list = (
                this.state.dataset[0].category_column.map((item,idx)=>{
                    return(
                            <li key={idx} style={{height:this.state.height}}>
                                <Link to={'/goodslist/'+type}>
                                    <span>{item.name}</span>
                                    <i className="fa fa-arrow-right"></i>
                                </Link>
                            </li>
                    )
                })
            )
        } 
        return (
            <ul className="TypeList">
                {list}
            </ul>
        )
    }
}

