import React,{Component} from 'react'
import {Route,IndexRoute,IndexRedirect} from 'react-router';

import NestedTable from './couponsList.js';
import Coupons from './index.js'
const couponsRoutes=(<Route path="coupons" component={Coupons}>
    <Route path="list" component={NestedTable} />
</Route>);

export default couponsRoutes