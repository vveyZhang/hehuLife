import React,{Component} from 'react'
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import Manage from './index.js'

import basicRoutes from './basic/router.js';
import shopRoutes from './shop/router.js'
import ActivityRoutes from './activity/router.js';
import couponsRoutes from './coupons/router.js'
export const manageRoutes=(<Route path="manage" component={Manage}>
    {ActivityRoutes}
    {basicRoutes}
    {shopRoutes}
    {couponsRoutes}
</Route>);
