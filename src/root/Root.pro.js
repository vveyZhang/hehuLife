import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import { createBrowserHistory } from 'history';

import Routes from './router.js';
export default class Root extends Component{
    render(){
        const {store}=this.props;
        const history = syncHistoryWithStore(createBrowserHistory(), store);
        return(
            <Provider store={store}>
                <Router history={history} children={Routes} />
            </Provider>
        )
    }
}