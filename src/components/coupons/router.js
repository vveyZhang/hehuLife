import React,{Component} from 'react'
import {Route,IndexRoute,IndexRedirect} from 'react-router';

import CouponsList from './couponsList.js';
import Coupons from './index.js'
const couponsRoutes=(<Route path="coupons" component={Coupons}>
    <Route path="list" component={CouponsList} />
</Route>);

export default couponsRoutes