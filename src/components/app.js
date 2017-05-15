import React,{Component} from 'react';
import PropTypes from 'prop-types';
console.log(PropTypes);
      
import {connect} from 'react-redux'
import {setVisibilityFilter,addTodo,completeTodo} from '../actions/actions.js';
import {visibilityFilter} from '../reducers/reducers.js';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    hedsa dasd awodasda   shdasi ni ssllo reactdas
                </div>
            </div>
        );
    }
}