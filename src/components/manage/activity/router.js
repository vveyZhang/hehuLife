import React from 'react';
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import Activity from './index.js';
import ActivityList from './activityList.js'
import PublishActivity from './publishActivity.js'
import Details from './activityDetails.js'
import EditorActivity from './editActivity.js'
const ActivityRoutes=(<Route path="activity" compnent={Activity}>
    <Route path="list" component={ActivityList} />
    <Route path="new" component={PublishActivity} />
    <Route path="details" component={Details} />
    <Route path="edit/:id" component={EditorActivity} />
</Route>);

export default ActivityRoutes