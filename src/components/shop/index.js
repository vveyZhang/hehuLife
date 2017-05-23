import React,{Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jQuery'
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;
import '../../css/style.css';
import Position from './../common/position.js';
import MyHeader from './../common/header.js';
export default class ShopContainer extends Component {
    state = {
        collapsed: false
    };
    componentDidMount(){
      const ch=$(window).height();
        $('.main').css({
            'min-height':ch
        });
        $(window).on('resize',function(){
            const ch=$(window).height();
            $('.main').css({
                'min-height':ch
            });
        })
    };
    componentUnMount(){
        $(window).off('resize');
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Layout className="main">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    collapsedWidth={0}
                    className="main-left"
                    >
                    <div className="logo" >
                        <img src="" width='100' height='40' alt=""/>
                    </div>
                    <Menu  className='nav' theme="light" mode="inline" defaultSelectedKeys={['nav1']} >
                        <Menu.Item key="nav1" className="nav-label">
                            <Icon type="user"  className='nav-icon'/>
                            <span className="nav-text">个人信息</span>
                        </Menu.Item>
                        <MenuItemGroup key="g1" className='nav-sub' title={<span><Icon type="home" className='nav-icon' /><span className="nav-text">我的店铺</span></span>}>
                            <Menu.Item key="sub1" className='second-nav second-nav-shop'>店铺一名字有点长怎么办我都不知道能不能显示完全</Menu.Item>
                            <Menu.Item key="sub2" className='second-nav second-nav-shop'>店铺二</Menu.Item>
                            <Menu.Item key="sub3" className='second-nav '><Icon type="plus"/>添加店铺</Menu.Item>
                        </MenuItemGroup>
                        <Menu.Item key="nav3" className="nav-label">
                            <Icon type="bars" className='nav-icon' />
                            <span className="nav-text">店铺活动</span>
                        </Menu.Item>
                        <Menu.Item key="nav4" className="nav-label">
                            <Icon type="solution" className='nav-icon' />
                            <span className="nav-text">我的美文</span>
                        </Menu.Item>
                        <Menu.Item key="nav5" className="nav-label">
                            <Icon type="edit" className='nav-icon' />
                            <span className="nav-text">发布活动</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <MyHeader collapsed={this.state.collapsed} toggle={()=>this.toggle()} />
                    <Position />
                    <Content style={{ margin: '0px 16px', padding:10, background: '#fff'}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}