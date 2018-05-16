import React from 'react'
import http from '../../../utils/HttpClient.js'
//Element type is invalid：expected a string or a class/function...没有写export default
export default class TypeList extends React.Component{
    state={
        config:{
            url: 'type',
            data: '13',
        },
        dataset:[]
    }
    componentDidMount(){
        let {url, data, method='get'} = this.state.config;
        http[method](url, {data}).then((res) => {
            this.setState({dataset:res.data});
        }).catch((error) => {
           console.log(error)
        })
    }
    changeType(type){
        this.setState({config:{url:'type',data:type}});
        let {url, data, method='get'} = this.state.config;
        http[method](url, {data}).then((res) => {
            this.setState({dataset:res.data});
        }).catch((error) => {
           console.log(error)
        })
    }
    render(){
        let list;
        if(this.state.dataset[0]){
            list = (
                this.state.dataset[0].category_column.map(item=>{
                    return(
                        <li key={item.type_id}>
                            <span>{item.name}</span>
                            <i className="fa fa-arrow-right"></i>
                        </li>
                    )
                })
            )
        } 
        return (
            <ul className="TypeList" >
                {list}
            </ul>
        )
    }
}

