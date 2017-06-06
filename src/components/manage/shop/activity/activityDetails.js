import React,{Component} from 'react';
import {Link} from 'react-router'
import {Icon} from 'antd';
export default  class Details extends Component{
    render(){
        return(
            <div>
                <div className="activity-photo">
                    <img src="http://www.vveyzhang.com/images/my-code.png" width="200" height="200" alt=""/>
                </div>
                <div className="activity-title">移动端适配的一些总结</div>
                <div className="activity-source">
                    <p>店铺：好喝奶行<span></span>状态：进行中</p>
                    <p>联系电话：13678077665<span></span>地址：上升街102号</p>
                </div>
                <div className="activity-content">
                </div>
                <div className="activity-btn-container">
                    <Link  className="activity-btn" to="/manage/shop/activity/edit"><Icon type="edit"/>编辑</Link>
                </div>
            </div>
        )
    }
}
