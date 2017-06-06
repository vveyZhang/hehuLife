import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
import shopInfor from './shopInforReducers.js'
const Reducers=combineReducers({
    shopInfor,
    routing:routerReducer
});
export default Reducers;