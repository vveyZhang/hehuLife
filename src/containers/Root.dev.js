import React,{Component} from 'react';
import {AppContainer} from 'react-hot-loader';
import App from '../components/app';
import {Provider} from 'react-redux';
export default class Root extends Component{
    render(){
        const {store}=this.props;
        return(
            <AppContainer >
                <Provider store={store}>
                    <div>
                        <App />
                    </div>

                </Provider>
            </AppContainer>
        )
    }
}
