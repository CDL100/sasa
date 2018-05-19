import React,{Component} from 'react';
import FixNav from '../FixNav/FixNav.js';
import './Cart.css';
import $ from 'jquery';
import http from '../../client-utils/HttpClient.js';

export default class Cart extends Component{
  componentDidMount(){
         $(document).ready(function(){
    //点击增加按钮触发事件
        $(".plus").click(function(){
            var num = $(this).parent().children("span");
    //单品数量增加
            num.text(parseInt(num.text())+1);
    //商品总数增加
            var totalNum = parseInt($(".totalNum").text());
            totalNum++
            $(".totalNum").text(totalNum);
    //计算总价
            var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
            $(".totalPrice").text(parseInt($(".totalPrice").text())+goods_price);
        });

    //点击减少按钮触发事件
         $(".minus").click(function(){
            var num = $(this).parent().children("span");
            if(parseInt(num.text())){
            num.text(parseInt(num.text())-1);
            var totalNum = parseInt($(".totalNum").text());
            totalNum--
            $(".totalNum").text(totalNum);
            var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
            $(".totalPrice").text(parseInt($(".totalPrice").text())-goods_price);
            }else{
            num.text("0");
            }
        });
     });
    }
    render(){
        return (
            <div className="hezi1">
                <header className="f_header1">
                    <ul>
                        <li></li>
                        <li>购物车</li>  
                        <li></li>
                    </ul>
                </header>
                <main className="f_main1">
                    <div className="goods_list">
                          <ul>
                            <li>
                              <img className="goods_img" src="http://cn02.alicdn.sasa.com/public/images/f4/94/81/6c4437024172d1b808b0a9886c5a6450953fa7ba.jpg?1423106274#h"/><p className="name">薏仁化妆水更能提高乳液的渗透程度，专门针对毛孔丶皮肤幼纹</p>
                              <div className="goods_bottom">¥<span className="goods_price">198.00</span>
                                  <div className="num"><img className="minus" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4096081551,1012270188&amp;fm=27&amp;gp=0.jpg" /><span>0</span><img className="plus" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1719730484,1460280482&amp;fm=27&amp;gp=0.jpg"/>
                                  </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                </main>
                <div className="jiezhang">
                    <ul>
                      <li>
                      <p className="pay">共<span className="totalNum">0</span>件</p>
                      <p>商品应付金额￥<span className="totalPrice">0</span></p>
                      </li>
                      <li className="open-window-2btn">
                         结账
                      </li>
                    </ul>
                </div>
                 <footer className="kz-special12">
                    <FixNav/>
                </footer>
            </div>
        )
      }
    }
 