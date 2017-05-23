import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class App extends Component{
    render(){
        return(<div className="test">{this.props.children}</div>)
    }
}
