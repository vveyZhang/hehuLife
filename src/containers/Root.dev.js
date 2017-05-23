import React,{Component} from 'react';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import routes from './router.js';
import {Router,browserHistory} from 'react-router';
//import { createBrowserHistory } from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
export default class Root extends Component{
    render(){
        const {store}=this.props;
        const history = syncHistoryWithStore(browserHistory, store);
        return(
            <AppContainer >
                <Provider store={store}>
                    <Router history={browserHistory} routes={routes} />
                </Provider>
            </AppContainer>
        )
    }
}
