
import React from 'react';
import {Route,IndexRedirect} from 'react-router';
import App from './../components/index.js'
import {manageRoutes} from '../components/manage/router.js'
const routes=
    (<Route path="/" component={App}>
        <IndexRedirect to="/manage/shop" />
        {manageRoutes}
    </Route>);
export default routes
