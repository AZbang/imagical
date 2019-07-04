import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as stores from './stores';
import Main from './views/Main';

const App: React.FC = () => (
  <Provider {...stores}>
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/saved" component={Main} />
    </Router>
  </Provider>
)

export default App;
