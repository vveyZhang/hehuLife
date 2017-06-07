import React,{Component} from 'react'
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import Manage from './index.js'

import basicRoutes from './basic/router.js';
import shopRoutes from './shop/router.js'
import ActivityRoutes from './activity/router.js';
console.log(ActivityRoutes)
export const manageRoutes=<Route path="manage" component={Manage}>
    {ActivityRoutes}
    {basicRoutes}
    {shopRoutes}

</Route>;
