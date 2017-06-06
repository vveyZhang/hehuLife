import React,{Component} from 'react'
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import Basic from './index.js'
import MyInfor from './myinfor.js'
import SafeCenter from './safeCenter.js'

const basicRoutes=<Route path="basic" component={Basic}>
    <Route path="infor" component={MyInfor}  />
    <Route path="safe" component={SafeCenter} />
</Route>;

export default basicRoutes
