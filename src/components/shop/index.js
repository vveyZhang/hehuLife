import React,{Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jQuery'
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;
import '../../css/style.css';
import MyHeader from './../common/header.js';
import {Link} from 'react-router';
import {connect} from 'react-redux';
 class ShopContainer extends Component {
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
                    <Menu  className='nav' theme="light" mode="inline" defaultSelectedKeys={['shop1']} >
                        <Menu.Item key="myinfor" className="nav-label">
                            <Link to='/shop/myinfor'>
                                <Icon type="user"  className='nav-icon'/>
                                <span className="nav-text">个人信息</span>
                            </Link>
                        </Menu.Item>
                        <MenuItemGroup key="g1" className='nav-sub' title={<span><Icon type="home" className='nav-icon' /><span className="nav-text">我的店铺</span></span>}>
                            <Menu.Item key="shop1" className='second-nav second-nav-shop'><Link to='/shop/myshop/1'>店铺一</Link></Menu.Item>
                            <Menu.Item key="shop2" className='second-nav second-nav-shop'><Link to='/shop/myshop/2'>店铺二</Link></Menu.Item>
                            <Menu.Item key="shopAdd" className='second-nav '><Link to='/shop/addshop'><Icon type="plus"/>添加店铺</Link></Menu.Item>
                        </MenuItemGroup>
                        <Menu.Item key="activity" className="nav-label">
                            <Link to='/shop/activity'>
                                <Icon type="bars" className='nav-icon' />
                                <span className="nav-text">店铺活动</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="article" className="nav-label">
                            <Link to='/shop/article'>
                                <Icon type="solution" className='nav-icon' />
                                <span className="nav-text">我的美文</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <MyHeader collapsed={this.state.collapsed} toggle={()=>this.toggle()} />
                    <Content style={{ margin: '20px 16px', padding:"10px 10px 40px 10px", background: '#fff'}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.params.id,
        routesTest: ownProps
    };
};
export default  connect(mapStateToProps)(ShopContainer)