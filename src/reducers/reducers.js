//import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER} from '../actions/actionTypes';
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
import getPath from './pathReducer.js'

const Reducers=combineReducers({
    getPath,
    routing:routerReducer
});
export default Reducers;