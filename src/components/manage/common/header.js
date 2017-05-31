import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
const { Header} = Layout;
export default class MyHeader extends Component{
    render(){
        return(
            <Header style={{ background:"#fff", position: 'fixed', width: '100%',zIndex:90,borderBottom:'1px solid #efefef'}}>
                <div className="logo" style={{float:'left'}} >
                    <img src="" width='100' height='40' alt=""/>
                </div>
            </Header>
        )
    }
}
