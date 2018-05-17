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


    RisePrice(e){
        e.target.classList.add('lk_active')
        let $default = $('.lk_Rise').eq(0) 
 
        let defaultdata = dataset.sort(function(a,b){
            return a.cost - b.cost;
        })  
        this.setState({
            data: defaultdata
        })
    }
RenQi(e){
        
        e.target.classList.add('lk_active')
        let $sold = $('.renqi').eq(0) 
       
        let Rdata = dataset.sort(function(a,b){
            return b.store - a.store;
        }) 
        this.setState({
            data: Rdata
        })  
    }
xiaoshou(e){
        
        e.target.classList.add('lk_active')
        let $sold = $('.xiaoshou').eq(0) 
       
        let solddata = dataset.sort(function(a,b){
            return b.weight - a.weight;
        }) 
        this.setState({
            data: solddata
        })  
    }

 zuixing(e){
      
        e.target.classList.add('lk_active')
        let $sold = $('.zuixing').eq(0) 
       
        let zuidata = dataset.sort(function(a,b){
            return b.buy_count - a.buy_count;
        }) 
        this.setState({
            data: zuidata
        })  
    }

     pingfeng(e){
         
        e.target.classList.add('lk_active')
        let $sold = $('.pingfeng').eq(0) 
       
        let pingfedata = dataset.sort(function(a,b){
            return b.weight - a.weight;
        }) 
        this.setState({
            data: pingfedata
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
                    <li className="xiaoshou" onClick={this.xiaoshou.bind(this)} >销售</li>
                    <li className="renqi"    onClick={this.RenQi.bind(this)}>人气</li>
                    <li className="pingfeng"  onClick={this.pingfeng.bind(this)}>评分</li>
                    <li className="lk_Rise" onClick={this.RisePrice.bind(this)}>价格<span className="fa fa-long-arrow-down" aria-hidden="true"></span></li>
                    <li className="zuixing" onClick={this.zuixing.bind(this)} >最新</li>

            </ul>
        
            <ul className="lk_dmain">{list}</ul>
            </div>
        )
    }
}
