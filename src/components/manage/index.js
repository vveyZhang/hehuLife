import React,{Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jQuery'
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import '../../css/style.css';
import MyHeader from './common/header.js';
import LeftNav from './leftNav.js'
import {connect} from 'react-redux';
export default class Manage extends Component {
    render() {
        return (
            <Layout className="main" >
                <MyHeader />
                <Layout style={{width:"1000px",margin:'24px auto 64px auto'}}>
                    <Sider width={200} className="main-left">
                        <LeftNav/>
                    </Sider>
                    <Content  style={{ borderLeft: '1px solid #e9e9e9', padding: '25px 20px 0px 20px', background: "#fafafa" }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
