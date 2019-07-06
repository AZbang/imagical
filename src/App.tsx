import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';

import * as stores from './stores';
import Preview from './views/Preview';
import Main from './views/Main';

const App: React.FC = () => (
  <Provider {...stores}>
    <Router>
      <Route exact path="/" component={Preview} />
      <Route path="/feed" component={Main} />
    </Router>
  </Provider>
);

export default App;
