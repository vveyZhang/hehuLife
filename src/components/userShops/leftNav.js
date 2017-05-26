import React,{Component} from 'react'
import {Menu, Icon } from 'antd';
const MenuItemGroup = Menu.ItemGroup;
import {Link} from 'react-router';
export default class LeftNav extends Component{
    render(){
        return(
            <div>
                <Menu  className='nav' theme="light" mode="inline" defaultSelectedKeys={['myinfor']} >
                    <Menu.Item key="myinfor" className="nav-label">
                        <Link to='/usershop/myinfor'>
                            <Icon type="user"  className='nav-icon'/>
                            <span className="nav-text">个人信息</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="article" className="nav-label">
                        <Link to='/usershop/artlist'>
                            <Icon type="solution" className='nav-icon' />
                            <span className="nav-text">我的美文</span>
                        </Link>
                    </Menu.Item>
                    <MenuItemGroup key="myshop" className='nav-sub' title={<span><Icon type="home" className='nav-icon' /><span className="nav-text">我的店铺</span></span>}>
                        <Menu.Item key="myshop1" className='second-nav second-nav-shop'><Link to='/usershop/myshop/1'>店铺一</Link></Menu.Item>
                        <Menu.Item key="myshop2" className='second-nav second-nav-shop'><Link to='/usershop/myshop/2'>店铺二</Link></Menu.Item>
                        <Menu.Item key="addshop" className='second-nav '><Link to='/usershop/addshop'><Icon type="plus"/>添加店铺</Link></Menu.Item>
                    </MenuItemGroup>
                    <Menu.Item key="activity" className="nav-label">
                        <Link to='/usershop/actlist'>
                            <Icon type="bars" className='nav-icon' />
                            <span className="nav-text">店铺活动</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="mytravel" className="nav-label">
                        <Link to='/usershop/mytravel'>
                            <Icon type="home" className='nav-icon' />
                            <span className="nav-text">我的旅社</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="travel" className="nav-label">
                        <Link to='/usershop/tralist'>
                            <Icon type="bars" className='nav-icon' />
                            <span className="nav-text">旅游活动</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}