import { Layout } from '@progress/kendo-drawing';
import React, { Component } from 'react';
// import { Route } from 'react-router';
import { HashRouter, Switch, Route } from "react-router-dom";
import { CustInfo } from './components/CustInfo';
import { Home } from './components/Home';
import { Copyright } from './components/Shared/Copyright/Copyright';
import DrawerRouterContainer from "./components/DrawerRouterContainer";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
                <HashRouter>
                    <DrawerRouterContainer>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route exact={true} path="/cust" component={CustInfo} />
                        </Switch>
                    </DrawerRouterContainer>
                </HashRouter>
                <hr></hr>
                <Copyright></Copyright>
            </>
        );
    }
}
