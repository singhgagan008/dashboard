import React from 'react';
import AppHeader from "../common/AppHeader";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../app/App';
import CountryDataComponent from './CountryDataComponent';

const Router = () => (
    <BrowserRouter>
        <AppHeader />
        <Switch>
            <Route path="/" component={ App } exact />
            <Route path="/country/:name" component={CountryDataComponent} exact/>
        </Switch>
    </BrowserRouter>
);

export default Router;