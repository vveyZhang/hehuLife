import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
const {Sider} =Layout;
const SubMenu = Menu.SubMenu;
export default class LeftNav extends Component{
    render(){
        return(
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
                collapsedWidth={0}
                className="main-left"
                >
                <div className="logo" >
                    <img src="" width='100' height='40' alt=""/>
                </div>
                <Menu  className='nav' theme="light" mode="inline" defaultSelectedKeys={['nav1']} defaultOpenKeys={['sub2']}>
                    <Menu.Item key="nav1" className="nav-label">
                        <Icon type="user"  className='nav-icon'/>
                        <span className="nav-text">我的店铺</span>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="mail" className='nav-icon' /><span className="nav-text">我的发布</span></span>}>
                        <Menu.Item key="second1" className='second-nav'>进行中</Menu.Item>
                        <Menu.Item key="second2" className='second-nav'>已过期</Menu.Item>
                        <Menu.Item key="second3" className='second-nav'>未开始</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="nav3" className="nav-label">
                        <Icon type="upload" className='nav-icon' />
                        <span className="nav-text">发布</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
