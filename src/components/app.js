import React,{Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jQuery'
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
import '../css/style.css';

import Position from './position.js'
import MyHeader from './header.js'
export default class App extends Component {
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
        $(window).off('resize')
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
                    <Menu  className='nav' theme="light" mode="inline" defaultSelectedKeys={['sub1']}>
                        <Menu.Item key="nav1" className="nav-label">
                            <Icon type="user"  className='nav-icon'/>
                            <span className="nav-text">我的店铺</span>
                        </Menu.Item>
                        <SubMenu key="nav2" className='nav-sub' title={<span><Icon type="mail" className='nav-icon' /><span className="nav-text">我的发布</span></span>}>
                            <Menu.Item key="sub1" className='second-nav'>进行中</Menu.Item>
                            <Menu.Item key="sub2" className='second-nav'>已过期</Menu.Item>
                            <Menu.Item key="sub3" className='second-nav'>未开始</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="nav3" className="nav-label">
                            <Icon type="upload" className='nav-icon' />
                            <span className="nav-text">发布</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <MyHeader collapsed={this.state.collapsed} toggle={()=>this.toggle()} />
                    <Position />
                    <Content style={{ margin: '0px 16px', padding:10, background: '#fff'}}>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}