import React from 'react';
import {Route,IndexRoute,IndexRedirect} from 'react-router';
import Activity from '../activity/activity.js';
import ActivityList from '../activity/activityList.js'
import PublishActivity from '../activity/publishActivity.js'
import Details from '../activity/activityDetails.js'
import EditorActivity from '../activity/editActivity.js'
const ActivityRoutes=<Route path="activity" compnent={Activity}>
    <Route path="list" component={ActivityList} />
    <Route path="publish" component={PublishActivity} />
    <Route path="details" component={Details} />
    <Route path="edit" component={EditorActivity} />
</Route>;

export default shopRoutes