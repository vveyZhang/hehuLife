import React,{Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jQuery'
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import '../../css/style.css';
import MyHeader from './../common/header.js';
import LeftNav from './leftNav.js'
import {connect} from 'react-redux';
export default class UserShop extends Component {
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
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} collapsedWidth={0}
                    className="main-left"
                    >
                    <LeftNav/>
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
