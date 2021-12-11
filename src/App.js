import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from './routers/home';
import Edit from './routers/edit';
import Detail from './routers/detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/:id" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
