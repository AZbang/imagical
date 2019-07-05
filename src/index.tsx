import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect-promise';

import './static/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
serviceWorker.unregister();
connect.send('VKWebAppInit', {});
