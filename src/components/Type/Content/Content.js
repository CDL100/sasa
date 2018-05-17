import React from 'react'
import ReactDOM from 'react-dom';
import TypeList from '../TypeList/TypeList.js';

export default class Content extends React.Component {
    componentDidMount(){
        $('.type li')[0].classList.add('type-alive')
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            }
        })
        $('.swiper-pagination-bullet')[0].innerText="商品分类";
        $('.swiper-pagination-bullet')[1].innerText="所有品牌";
    }
    static defaultProps = {
        data:[
                {name: "面部护肤",type: "13"},
                {name: "彩妆",type: "21"},
                {name: "香水",type: "29"},
                {name: "健康美肌",type: "26"},
                {name: "纤体美胸",type: "25"},
                {name: "个人护理",type: "1"},
                {name: "男士专区",type: "12"}
            ]
    }
    changeType(e){
        //点击时改变type类型
        this.refs.TypeList.changeType(e.target.type)
    }
    changeActive(e){
        for(var i=0;i<$('.type li').length;i++){
            $('.type li').removeClass('type-alive');
        }
        $(e.target).addClass('type-alive');
    }
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-pagination"></div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <ul className="type">
                            {
                                this.props.data.map((item)=>{
                                    return <li 
                                                type={item.type} 
                                                key={item.type} 
                                                onClick={(e) => {this.changeType(e);this.changeActive(e)}}
                                            >
                                                {item.name}
                                            </li>
                                })
                            }
                        </ul>
                        <TypeList ref="TypeList"/>
                    </div>
                    <div className="swiper-slide"></div>
                </div>
            </div>
        )
    }
}