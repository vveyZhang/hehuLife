import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router'
export default class App extends Component{
    render(){
        return(<div>
            {this.props.children}
        </div>)
    }
}
