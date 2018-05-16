import React,{Component} from 'react';
 
import http from 'superagent'

import {Link} from 'react-router'




import './datalist.scss'
 

export default class User extends Component{

                state ={
                        data:[]

                                }
    componentDidMount(){

            // let id=1;

       
            http.get('http://localhost:88/bSasagoods').end((req,res)=>{

             
              let goods=res.body.data//filter(function(item) {
            //    return item.id==id
            // });
    console.log(goods)
        this.setState(
            {data:goods}
            );
        console.log(this.state.data)   

            })
        
        }

        
    render(){
        return (
            <div className="lk_dhome">
               
            <ul className="lk_dheader"> 

            <li><Link to="/"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link></li>
            <li> <i className="fa fa-search" aria-hidden="true"></i><input className="lk_soso" type="text"  placeholder="新品上市" /></li>
            <li><i className="fa fa-filter" aria-hidden="true"></i></li>
            </ul>

            <ul className="lk_dnav"> 
                    <li>销售</li>
                    <li>人气</li>
                    <li>评分</li>
                    <li>价格<i className="fa fa-long-arrow-down" aria-hidden="true"></i></li>
                    <li>最新</li>



            </ul>
        
              <ul className="lk_dmain">
               { 


           this.state.data.map(function(items){ 
                return <li key={items._id}>
                <div className="dmain_img">
                <img src={items.url}/>
                </div>
                <div className="dmain_txt">
                <p>{items.title}</p>
                <p>{items.describe}</p>
                <p className="thprice">￥{items.price}</p>
                <p className="fourtxt"><del className="ftxt">{items.save}</del></p>
                <i className="icout">{items.country}...</i>
                <span className="facover"></span><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <i className="newshop">新品上市</i>
                </div>
                </li>
            })
        }
              </ul>
            </div>
        )
    }




}