import React from "react";
import {render} from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
const rtElement=document.getElementById('root');
const store=configureStore();
try{
    render(<Root store={store}/> ,rtElement)
}catch(e){
    console.error(e.stack)
}
if(process.env.NODE_ENV=="development"&&module.hot){
    module.hot.accept('./containers/Root.js',()=>{
        const NextApp=require('./containers/Root').default;
        try{
            render(<NextApp store={store}/> ,rtElement)
        }catch(e){
            console.error(e.stack)
        }
    });
}