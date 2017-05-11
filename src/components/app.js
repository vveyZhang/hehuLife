import React,{Component} from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter,addTodo,completeTodo} from '../actions/actions.js';
import {visibilityFilter} from '../reducers/reducers.js'
export default class App extends Component{
    render(){
        const {filter,dispatch,todos}=this.props;
        return(
            <div>
                hello react
            </div>
        )
    }
}

