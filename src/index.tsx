import React from 'react';
import ReactDOM from 'react-dom';
import App from "app/App";
import {Router} from "react-router";
import {browserHistory} from "router";

ReactDOM.render(
    <Router history={browserHistory}>
        <App/>
    </Router>,
    document.getElementById('root')
);
