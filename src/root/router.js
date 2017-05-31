
import React from 'react';
//路由
import {Route,IndexRoute,IndexRedirect,browserHistory} from 'react-router';

import App from './../components/index.js'

/*
* 用户店铺
* */
import Manage from '../components/manage/index.js'
import MyInfor from '../components/manage/myInfor.js';
/*
* 商铺
* */
import Shop from '../components/manage/shop/shop.js'
import MyShop from '../components/manage/shop/shopInfor.js';
import Activity from '../components/manage/shop/activity/activity.js';
import ActivityList from '../components/manage/shop/activity/activityList.js';
import PublishActivity from '../components/manage/shop/activity/publishActivity.js'
/*
* 旅游店铺
* */
import MyTravel  from '../components/manage/travel/myTravel.js';
import TravelList from '../components/manage/travel/travelList.js';
import PushTravel from '../components/manage/travel/publishTravel.js'

const routes=
    <Route path="/" component={App}>
        <Route path="manage" component={Manage}>
            <Route path="myinfor" component={MyInfor}></Route>
            <Route path="shop" component={Shop}>
                <Route path="infor" component={MyShop} />
                <Route path="activity" component={Activity}>
                    <Route path="list" component={ActivityList} />
                    <Route path="publish" component={PublishActivity} />
                </Route>

            </Route>

            <Route path="pubact" component={PushActivity} />
            <Route path="mytravel" component={MyTravel} />
            <Route path="tralist" component={TravelList} />
            <Route path="pubtra" component={PushTravel} />
        </Route>
    </Route>;
export default routes
