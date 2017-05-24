
import React from 'react';
//路由
import {Route,IndexRoute,IndexRedirect,browserHistory} from 'react-router';

import App from './../components/app.js'
import ShopContainer from './../components/shop/index.js'
import MyInfor from './../components/shop/myInfor.js';
import ShopInfor from './../components/shop/shopInfor.js';
import ActivityList from './../components/shop/activityList.js';
import ArticleList from './../components/shop/articleList.js'
import PushActivity from './../components/shop/pushActivity.js'
import PushArticle from './../components/shop/pushArticle.js'
const routes=
    <Route path="/" component={App}>
        <Route path="shop" component={ShopContainer}>
            <Route path="myinfor" component={MyInfor} />
            <Route path="myshop/:id" component={ShopInfor} />
            <Route path="addshop" component={ShopInfor} />
            <Route path="activity" component={ActivityList} />
            <Route path="pactivity" component={PushActivity} />
            <Route path="article" component={ArticleList} />
            <Route path="particle" component={PushArticle} />
        </Route>
    </Route>;
export default routes
