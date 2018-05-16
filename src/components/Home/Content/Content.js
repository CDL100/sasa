
import React,{Component} from 'react';


import {Link} from 'react-router'
 
 
 

export default class Header extends Component{
    


    render(){
        return (
            <div className='lk_main'>
                  <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="src/images/banner1.jpg" alt=""/></div>
            <div className="swiper-slide"> <img src="src/images/banner2.jpg" alt="" /></div>
            <div className="swiper-slide"> <img src="src/images/banner3.jpg" alt="" /></div>
            <div className="swiper-slide"> <img src="src/images/banner4.jpg" alt="" /></div>
            <div className="swiper-slide"> <img src="src/images/banner5.jpg" alt="" /></div>
            <div className="swiper-slide"> <img src="src/images/banner6.jpg" alt="" /></div>
            <div className="swiper-slide"> <img src="src/images/banner7.jpg" alt="" /></div>
     
        </div>
         
        <div className="swiper-pagination"></div>
       

    </div>



    <div className="lk_nav">
        <ul>
        <li><i><img src="http://cn03.alicdn.sasa.com/public/images/7b/b4/25/14d48c958a4ad30f56691dd11075f62ab6be1cab.png?1522127309#h"/></i><span>闪电保税</span></li>
        <li><i><img src="http://cn03.alicdn.sasa.com/public/images/13/46/2a/602dae85ad38274c8b6397d0e208d06fc0e2839a.png?1522127272#h"/></i><span>清仓特卖</span></li>
        <li><i><img src="http://cdnec.sasa.com/public/images/ff/dd/68/6a07924aa01710d54c337882a9769f826b0357b7.jpg?1474363760#h"/></i><span>面膜</span></li>
        <li><i><img src="http://cdnec.sasa.com/public/images/bb/8d/b3/904d6991ab9929cee801ece38ed525d4542c0abf.jpg?1474363410#h"/></i><span>面部护肤</span></li>
        <li><i><img src="http://cdnec.sasa.com/public/images/ff/dd/68/6a07924aa01710d54c337882a9769f826b0357b7.jpg?1474363760#h"/></i><span>彩妆</span></li>
        <li><i><img src="http://cdnec.sasa.com/public/images/ff/dd/68/6a07924aa01710d54c337882a9769f826b0357b7.jpg?1474363760#h"/></i><span>香水</span></li>
        <li><i><img src="http://cn03.alicdn.sasa.com/public/images/7b/b4/25/14d48c958a4ad30f56691dd11075f62ab6be1cab.png?1522127309#h"/></i><span>健康美肌</span></li>
       
        <li><i><img src="http://cdnec.sasa.com/public/images/ff/dd/68/6a07924aa01710d54c337882a9769f826b0357b7.jpg?1474363760#h"/></i><span>个人护理</span></li>
        <li><i><img src="http://cn03.alicdn.sasa.com/public/images/13/46/2a/602dae85ad38274c8b6397d0e208d06fc0e2839a.png?1522127272#h"/></i><span>孕婴护理</span></li>
         <li><i><img src="http://cdnec.sasa.com/public/images/bb/8d/b3/904d6991ab9929cee801ece38ed525d4542c0abf.jpg?1474363410#h"/></i><span>男士专区</span></li>
        
      </ul>
      </div>

 
      <div className="lk_main1">
      <h4>每日必看</h4>
        <div className="main1_img"><img src="src/images/bg1.jpg"/></div>
        <div className="main2_img"><img src="src/images/bg2.jpg"/></div>
        <div className="main3_img"><img src="src/images/bg3.jpg"/></div>
        <div className="main4_img"><img src="src/images/bg4.jpg"/></div>
        <div className="main5_img"><img src="src/images/bg5.jpg"/></div>
        <div className="main6_img"><img src="src/images/main3.jpg"/></div>
        <div className="main7_img"><img src="src/images/main7.jpg"/></div>
      </div>
      
            </div>



        )
    }

}


