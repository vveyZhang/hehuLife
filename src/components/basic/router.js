import React,{Component} from 'react'
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import Basic from './index.js'
import MyInfor from './myinfor.js'
import SafeCenter from './safeCenter.js'
import MyMessage from './message.js'
const basicRoutes=(<Route path="basic" component={Basic}>
    <Route path="infor" component={MyInfor}  />
    <Route path="safe" component={SafeCenter} />
    <Route path="message" component={MyMessage} />
</Route>);

export default basicRoutes
