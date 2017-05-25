
import React from 'react';
//路由
import {Route,IndexRoute,IndexRedirect,browserHistory} from 'react-router';

import App from './../components/app.js'

/*
* 用户店铺
* */
import UserShop from '../components/userShops/index.js'
import MyInfor from '../components/common/myInfor.js';
import ArticleList from '../components/common/articleList.js'
import PushArticle from '../components/common/publishArticle.js'
import ArticleDetails from '../components/common/articleDetails.js'
/*
* 普通店铺
* */
import MyShop from '../components/userShops/shop/myShop.js';
import AddShop from '../components/userShops/shop/addShop.js'
import ActivityList from '../components/userShops/shop/activityList.js';
import PushActivity from '../components/userShops/shop/publishActivity.js'
/*
* 旅游店铺
* */
import MyTravel  from '../components/userShops/travel/myTravel.js';
import TravelList from '../components/userShops/travel/travelList.js';
import PushTravel from '../components/userShops/travel/publishTravel.js'

const routes=
    <Route path="/" component={App}>
        <Route path="usershop" component={UserShop}>
            <Route path="myinfor" component={MyInfor} />
            <Route path="artlist" component={ArticleList} />
            <Route path="pubart" component={PushArticle} />
            <Route path="article/:id" component={ArticleDetails} />

            <Route path="myshop/:id" component={MyShop} />
            <Route path="addshop" component={AddShop} />
            <Route path="actlist" component={ActivityList} />
            <Route path="pubact" component={PushActivity} />

            <Route path="mytravel" component={MyTravel} />
            <Route path="tralist" component={TravelList} />
            <Route path="pubtra" component={PushTravel} />

        </Route>
    </Route>;
export default routes
