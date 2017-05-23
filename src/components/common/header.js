import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Icon } from 'antd';
const { Header} = Layout;
const SubMenu = Menu.SubMenu;
export default class MyHeader extends Component{
    state={
        collapsed:true
    }
    render(){
        return(
            <Header className="header"  style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                    />
            </Header>
        )
    }
}
