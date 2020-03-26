import './styles/normalize/normalize.scss';
import './styles/global.scss';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/App.jsx';

render(
    <Router>
        <App />
    </Router>,
    document.querySelector('#root')
);