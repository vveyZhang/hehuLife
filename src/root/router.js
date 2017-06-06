
import React from 'react';
import {Route} from 'react-router';
import App from './../components/index.js'

import {manageRoutes} from '../components/manage/router.js'
const routes=
    <Route path="/" component={App}>
        {manageRoutes}
    </Route>;
export default routes
