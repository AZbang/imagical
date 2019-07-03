import React from 'react';
import ReactDOM from 'react-dom';

import './static/index.css';
import App from './App';
import * as stores from './stores';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(<App stores={stores} />, root);
serviceWorker.unregister();
