import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import './styles/index.css';
import Wrapper from './components/Wrapper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Wrapper/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();
