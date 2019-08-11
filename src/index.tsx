import './static/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './view/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
serviceWorker.unregister();
