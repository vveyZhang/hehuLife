import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb } from 'antd'
export default class Position extends Component{
    render(){
        return(
            <Breadcrumb className='position'>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

