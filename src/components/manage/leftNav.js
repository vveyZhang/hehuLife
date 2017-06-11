import React,{Component} from 'react'
import {Menu, Icon } from 'antd';
const MenuItemGroup = Menu.ItemGroup;
import {Link} from 'react-router';
import {connect} from 'react-redux';
 class LeftNav extends Component{
    render(){
        const {dispatch,pathName}=this.props;
        const currentPath=pathName.split('/').join("");
        return(
            <div>
                <Menu  className='nav' theme="light" mode="inline" selectedKeys={[currentPath]} >
                    <MenuItemGroup key='basic' className="nav-sub" title={<span><Icon type="user" className='nav-icon' /><span className="nav-text">基本信息</span></span>}>
                        <Menu.Item key="managebasicinfor" className='second-nav second-nav-shop'>
                            <Link to='/manage/basic/infor'>我的信息</Link>
                        </Menu.Item>
                        <Menu.Item key="managebasicmassage" className='second-nav second-nav-shop'>
                            <Link to='/manage/basic/massage'>我的消息</Link>
                        </Menu.Item>
                        <Menu.Item key="managebasicsafe" className='second-nav second-nav-shop'>
                            <Link to='/manage/basic/safe'>安全中心</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="shop" className='nav-sub' title={<span><Icon type="shop" className='nav-icon' /><span className="nav-text">店铺管理</span></span>}>
                        <Menu.Item key="manageshopinfor" className='second-nav second-nav-shop'>
                            <Link to='/manage/shop/infor'>店铺信息</Link>
                        </Menu.Item>
                        <Menu.Item key="manageshopclerks " className='second-nav second-nav-shop'>
                            <Link to='/manage/shop/clerks '>店铺成员</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="activity" className='nav-sub' title={<span><Icon type="appstore-o" className='nav-icon' /><span className="nav-text">活动管理</span></span>}>
                        <Menu.Item key="manageactivitylist" className='second-nav second-nav-shop'>
                            <Link to='/manage/activity/list'>店铺活动</Link>
                        </Menu.Item>
                        <Menu.Item key="manageactivitynew" className='second-nav second-nav-shop'>
                            <Link to='/manage/activity/new'>新建活动</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="coupons" className='nav-sub' title={<span><Icon type="gift" className='nav-icon' /><span className="nav-text">卡包管理</span></span>}>
                        <Menu.Item key="managecouponslist" className='second-nav second-nav-shop'>
                            <Link to='/manage/coupons/list'>店铺卡包</Link>
                        </Menu.Item>
                        <Menu.Item key="managecouponsnew" className='second-nav second-nav-shop'>
                            <Link to='/manage/coupons/new'>新建优惠卡</Link>
                        </Menu.Item>
                        <Menu.Item key="managecouponsvalidation" className='second-nav second-nav-shop'>
                            <Link to='/manage/coupons/validation'>卡包验证</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="functional" className='nav-sub' title={<span><Icon type="api" className='nav-icon' /><span className="nav-text">功能</span></span>}>
                        <Menu.Item key="managefunctionalmass" className='second-nav second-nav-shop'>
                            <Link to='/manage/functional/mass'>活动群发</Link>
                        </Menu.Item>
                        <Menu.Item key="managefunctionalshopauthentic" className='second-nav second-nav-shop'>
                            <Link to='/manage/functional/shopauthentic'>店铺认证</Link>
                        </Menu.Item>
                        <Menu.Item key="managefunctionalwdauthentic" className='second-nav second-nav-shop'>
                            <Link to='/manage/functional/wdauthentic'>微店认证</Link>
                        </Menu.Item>
                        <Menu.Item key="managefunctionalrepresent" className='second-nav second-nav-shop'>
                            <Link to='/manage/functional/represent'>平民代言</Link>
                        </Menu.Item>
                        <Menu.Item key="managefunctionalmappacket" className='second-nav second-nav-shop'>
                            <Link to='/manage/functional/mappacket'>地图红包</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="analysis" className='nav-sub' title={<span><Icon type="bar-chart" className='nav-icon' /><span className="nav-text">统计</span></span>}>
                        <Menu.Item key="manageanalysisuser" className='second-nav second-nav-shop'>
                            <Link to='/manage/analysis/user'>用户分析</Link>
                        </Menu.Item>
                        <Menu.Item key="manageanalysisactivity" className='second-nav second-nav-shop'>
                            <Link to='/manage/analysis/activity'>活动分析</Link>
                        </Menu.Item>
                        <Menu.Item key="manageanalysiscoupons" className='second-nav second-nav-shop'>
                            <Link to='/manage/analysis/coupons'>卡包分析</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="feedback" className='nav-sub last' title={<span><Icon type="mail" className='nav-icon' /><span className="nav-text">反馈</span></span>}>
                        <Menu.Item key="managefeedbacksuggest" className='second-nav second-nav-shop'>
                            <Link to='/manage/feedback/suggest'>意见建议</Link>
                        </Menu.Item>
                        <Menu.Item key="managefeedbackcomplain" className='second-nav second-nav-shop'>
                            <Link to='/manage/feedback/complain'>侵权投诉</Link>
                        </Menu.Item>
                        <Menu.Item key="managefeedbackcontact" className='second-nav second-nav-shop'>
                            <Link to='/manage/feedback/contact'>联系我们</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                </Menu>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        pathName:state.routing.locationBeforeTransitions.pathname,
}
}
export default connect(mapStateToProps)(LeftNav)
