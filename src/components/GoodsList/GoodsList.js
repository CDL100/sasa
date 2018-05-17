import React from 'react';
import http from '../../utils/HttpClient.js';
import './GoodsList.scss'
import {Link} from 'react-router'


let dataset;
export default class GoodsList extends React.Component{
    componentDidMount(){
        let type = this.props.params.type;
        http.get('datalist', {type}).then((res) => {
            dataset = res.data;
             
        }).catch((error) => {
           
        })
    }


    render(){
        let list;
        if(dataset){
           list=(
               dataset.map(item=>{
                   return(
                        
                <li key={item._id}> 
                <div className="dmain_img">
                <img src={item.product_image}/>
                </div>
                <div className="dmain_txt">
                <p>{item.name}</p>
                <p className="lk_brief">{item.brief}</p>
                <p className="thprice">￥{item.cost}</p>
                <p className="fourtxt"><del className="ftxt">￥{item.store}</del></p>
                <i className="icout">{item.countryOfOrigin}...</i>
               <span className="facover"></span><i className="fa fa-shopping-cart" aria-hidden="true"></i>
               <i className="newshop">新品上市</i>
                </div>



                            </li>
                         
                   )
               })
           )
        }
        return (
            <div className="lk_dhome">

            <ul className="lk_dheader"> 

            <li><Link to="/type"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link></li>
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
        
            <ul className="lk_dmain">{list}</ul>
            </div>
        )
    }
}
