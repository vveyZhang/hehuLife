import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER} from '../actions/actionTypes';
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
export const visibilityFilter={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETE:'SHOW_COMPLETE',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}
function setVisibilityFilter(state=visibilityFilter.SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER :
            return action.filter;
        default :
            return state;
    }
}
function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [...state,{
                text:action.text,
                complete:false
            }];
        case COMPLETE_TODO:
            return [...state.slice(0,action.index),Object.assign({},state[action.index],{
                complete:true
            }),...state.slice(action.index+1)]
        default :
            return state
    }
}
const todoReducers=combineReducers({
    setVisibilityFilter,
    todos,
    routing:routerReducer
});
export default todoReducers;