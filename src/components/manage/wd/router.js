import React from 'react';
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import MyWd from './infor/index.js'
import WdContainer from './index.js'
const wdRoutes=<Route path="wd" component={WdContainer}>
    <Route path="infor" component={MyWd} />
</Route>;

export default wdRoutes