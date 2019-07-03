import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { User, Feed } from './views';

const App: React.FC = ({ stores }: { stores: [] }) => (
  <Provider {...stores}>
    <Router>
      <Route exact path="/" component={User} />
      <Route path="/feed" component={Feed} />
    </Router>
  </Provider>
)

export default App;
