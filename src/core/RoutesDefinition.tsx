import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ClientListPage from "../pages/clientlist/ClientListPage";
import ClientFormPage from "../pages/clientForm/ClientFormPage";

const RoutesDefinition = () => {
    return (
            <Switch>
                <Route path={DashboardPage.routeName} component={DashboardPage} />
                <Route path={ClientFormPage.routeName} component={ClientFormPage} />
                <Route path={ClientListPage.routeName}  component={ClientListPage} />
                <Redirect from={'/'} exact={true} to={DashboardPage.routeName} />
            </Switch>
    );
};

export default RoutesDefinition;