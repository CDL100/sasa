import React,{Component} from 'react'
import '../particulars/particulars.css'
import $ from 'jquery'
import http from '../../client-utils/HttpClient.js'

export default class Particulars extends Component{
      componentDidMount(){
         $('.btn-buy').bind('click',function(){
          $('.nihao')
          var flyElm = $('.nihao').clone().css('opacity', 0.75);
          $('body').append(flyElm);
          flyElm.css({
            'display': 'block',
            'position': 'absolute',
            'top': $('.nihao').offset().top +'px',
            'left': $('.nihao').offset().left +'px',
            'width': $('.nihao').width() +'px',
            'height': $('.nihao').height() +'px'
          });
          flyElm.animate({
            top: $('.head-shopcart').offset().top,
            left: $('.head-shopcart').offset().left,
            width: 20,
            height: 32
          }, 'slow', function() {
            flyElm.remove();
          });
       });

              
    }
    render(){
        return (
               <div className="hezi">
                <header className="f_header">
                    <ul>
                        <li>
                            <a href="http://localhost:3002/#/type"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" class="ElemeHeader-leftArrow_1PLBnDh_0"/>
                            </a>
                            </li>
                        <li className="bian">
                            第五代多种功能
                        </li>
                        <li></li>
                    </ul>
                </header>
                <main className="f_main">
                    <div className="img">
                      <img className="nihao" src="http://cn02.alicdn.sasa.com/public/images/f4/94/81/6c4437024172d1b808b0a9886c5a6450953fa7ba.jpg?1423106274#h" />
                    </div>
                    <div className="name">
                        <p>薏仁化妆水更能提高乳液的渗透程度，专门针对毛孔丶皮肤幼纹，及经常化妆而导致肌肤老化的问题，特别加入薏仁成分，当中蕴含丰富的维他命B1 和 B2</p>
                    </div>
                    <div className="price">
                    <p><span className="span1">￥93</span><s>￥120</s><span className="span2"><i>7.8折</i></span></p>
                    </div>
                    <div className="xiangqing">
                    <p><i>【保税品】</i><span>(范冰冰同款)  日本薏仁化妆水500毫升</span></p>
                    </div>
                    <div className="xiangq">
                            <ul>
                                <li><h3>用户详情</h3></li>
                                <li><a href="#dingbu"><h3>用户体验</h3></a></li>
                                <li><a href="#dingbu"><h3>用户评论</h3></a></li>
                            </ul>

                       <img src="http://www.sasa.com/public/promoImgs/bondedgoods/zz_service_notice-01.jpg"/>
                       <img src="http://www.sasa.com/public/promoImgs/bondedgoods/zz_service_notice-02.jpg"/>
                    </div>
                    <div className="yonghu">
                        <h3 id="dingbu">用户评论</h3>
                        <ul>
                        <li><span>陈....</span>
                           <svg viewBox="0 0 122 122" id="avatar-default" width="100px" height="100px"><path fill="#EE3E7E" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                           </li>
                           <li>
                              <p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1526374622965&amp;di=caa6b1716bf94882be030832a5246450&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.jiemian.com%2Fjiemian%2Foriginal%2F20170718%2F150034734378916800_a580xH.png"/>
                              </p>
                              <p className="ganggang">
                                刚刚
                              </p>
                           </li>

                        </ul>
                        <p className="discuss-detail">
                            之前都用牛油果，想换款试试，使用非常顺滑，好吸收，不知有没有抗皱效果。</p>

                        <ul>
                        <li><span>黄....</span>
                           <svg viewBox="0 0 122 122" id="avatar-default" width="100px" height="100px"><path fill="#EE3E7E" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                           </li>
                           <li>
                              <p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1526374622965&amp;di=caa6b1716bf94882be030832a5246450&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.jiemian.com%2Fjiemian%2Foriginal%2F20170718%2F150034734378916800_a580xH.png"/>
                              </p>
                              <p className="ganggang">
                                2018年5月12日
                              </p>
                           </li>

                        </ul>
                        <p>正品，希望有更多优惠</p>
                        <ul>
                        <li><span>刘....</span>
                           <svg viewBox="0 0 122 122" id="avatar-default" width="100px" height="100px"><path fill="#EE3E7E" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                           </li>
                           <li>
                              <p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1526374622965&amp;di=caa6b1716bf94882be030832a5246450&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.jiemian.com%2Fjiemian%2Foriginal%2F20170718%2F150034734378916800_a580xH.png"/>
                              </p>
                              <p className="ganggang">
                                2018年5月13日
                              </p>
                           </li>

                        </ul>
                        <p>真的不错 买了好多次了 挺好用的。就是上次的包装太简单了 ，不知道什么原因</p>
                        <ul>
                        <li><span>温....</span>
                           <svg viewBox="0 0 122 122" id="avatar-default" width="100px" height="100px"><path fill="#EE3E7E" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                           </li>
                           <li>
                              <p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1526374622965&amp;di=caa6b1716bf94882be030832a5246450&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.jiemian.com%2Fjiemian%2Foriginal%2F20170718%2F150034734378916800_a580xH.png"/>
                              </p>
                              <p className="ganggang">
                                刚刚
                              </p>
                           </li>

                        </ul>
                        <p>真的不错 买了好多次了 挺好用的。就是上次的包装太简单了 ，不知道什么原因</p>
                        <ul>
                        <li><span>赵....</span>
                           <svg viewBox="0 0 122 122" id="avatar-default" width="100px" height="100px"><path fill="#EE3E7E" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                           </li>
                           <li>
                              <p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1526374622965&amp;di=caa6b1716bf94882be030832a5246450&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.jiemian.com%2Fjiemian%2Foriginal%2F20170718%2F150034734378916800_a580xH.png"/>
                              </p>
                              <p className="ganggang">
                                 2018年5月13日
                              </p>
                           </li>

                        </ul>
                        <p>
                                跟以前在香港买的差不太多，相信莎莎，还会再买</p>
                        <ul>
                        <li><span>单....</span>
                           <svg viewBox="0 0 122 122" id="avatar-default" width="100px" height="100px"><path fill="#EE3E7E" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                           </li>
                           <li>
                              <p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1526374622965&amp;di=caa6b1716bf94882be030832a5246450&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.jiemian.com%2Fjiemian%2Foriginal%2F20170718%2F150034734378916800_a580xH.png"/>
                              </p>
                              <p className="ganggang">
                                2018年5月15日
                              </p>
                           </li>

                        </ul>
                        <p>
                                一直用这个比较滋润，就是主要还是预防和延缓。消除什么的效果没感受到。 </p>
                    </div>
                
                </main>
                <footer className="f_footer">
                    <ul>
                       <li className="head-shopcart">
                             <a href="http://localhost:3002/#/cart">去购物车</a>
                        </li>
                        <li className="btn-buy">
                            加入购物车
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}
