import React from 'react';
import {Route,IndexRoute,IndexRedirect} from 'react-router';

import Shop from './index.js';
import MyShop from './shopInfor/shopInfor.js';
import Activity from './activity/activity.js';
import ActivityList from './activity/activityList.js'
import PublishActivity from './activity/publishActivity.js'
import Details from './activity/activityDetails.js'
import EditorActivity from './activity/editActivity.js'
const shopRoutes=<Route path="shop" component={Shop}>
    <Route path="infor" component={MyShop} />
    <Route path="activity" compnent={Activity}>
        <Route path="list" component={ActivityList} />
        <Route path="publish" component={PublishActivity} />
        <Route path="details" component={Details} />
        <Route path="edit" component={EditorActivity} />
    </Route>
</Route>;

export default shopRoutes