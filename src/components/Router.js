import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../app/App';
import CountryDataComponent from './CountryDataComponent';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ App } exact />
            <Route path="/country/:name" component={CountryDataComponent} />
        </Switch>
    </BrowserRouter>
);

export default Router;