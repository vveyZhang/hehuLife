import React from 'react';
import {Route,IndexRoute,IndexRedirect} from 'react-router';

import Shop from './index.js';
import MyShop from './shopInfor/shopInfor.js';
import Activity from '../activity/index.js';
import ActivityList from '../activity/activityList.js'
import PublishActivity from '../activity/publishActivity.js'
import Details from '../activity/activityDetails.js'
import EditorActivity from '../activity/editActivity.js'
const shopRoutes=(<Route path="shop" component={Shop}>
    <Route path="infor" component={MyShop} />
</Route>);

export default shopRoutes