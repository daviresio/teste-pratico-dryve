import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import MyThemeProvider from "./styles/MyThemeProvider";
import PageLayout from "./layout/PageLayout";
import RoutesDefinition from "./core/RoutesDefinition";
import {Provider} from "react-redux";
import store from './store'
import {Router} from "react-router";
import {history} from "./core/routesHistory";

function App() {
    return (
        <Provider store={store}>
            <MyThemeProvider>
                <GlobalStyles/>
                <Router history={history}>
                    <PageLayout>
                        <RoutesDefinition/>
                    </PageLayout>
                </Router>
            </MyThemeProvider>
        </Provider>
    );
}

export default App;
