import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';

import * as stores from '../stores';
import Feed from './Feed';
import Saved from './Saved';

const App: React.FC = () => (
  <Provider {...stores}>
    <Router>
      <Route exact path="/" component={Feed} />
      <Route exact path="/saved" component={Saved} />
    </Router>
  </Provider>
);

export default App;
