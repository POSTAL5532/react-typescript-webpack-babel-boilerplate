import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import {INDEX_PAGE, IndexPage} from "app/logic/IndexPage";
import {DATE_PAGE, DatePage} from "app/logic/DatePage";
import "app/App.less"

function App() {
    return (
        <div className="app">

            <div className="navigation">
                <NavLink to={INDEX_PAGE} exact>Index page</NavLink>
                <NavLink to={DATE_PAGE} exact>Date page</NavLink>
            </div>

            <Switch>
                <Route path={INDEX_PAGE} exact component={IndexPage}/>
                <Route path={DATE_PAGE} exact component={DatePage}/>
                <Redirect from="*" to={INDEX_PAGE}/>
            </Switch>
        </div>
    );
}

export default App;
