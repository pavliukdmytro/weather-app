import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Weather from "./Weather/Weather.jsx";

function App() {
    return(
        <div className="container">
            <Switch>
                <Route path={`${window.routsPath}:day`}>
                    <Weather  />
                </Route>
                <Route path={`${window.routsPath}`}>
                    <Weather  />
                </Route>
            </Switch>
        </div>
    )
}

export default App;