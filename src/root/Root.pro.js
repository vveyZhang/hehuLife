import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import routes from './router.js';
import {Router,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
export default class Root extends Component{
    render(){
        const {store}=this.props;
        const history = syncHistoryWithStore(browserHistory, store);
        return(
            <Provider store={store}>
                <Router history={history} children={routes} />
            </Provider>
        )
    }
}