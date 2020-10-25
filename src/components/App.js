import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Detail from '../routers/Detail';
import Edit from '../routers/Edit';
import Home from '../routers/Home';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={Detail} />
            <Route path="/edit/:id" component={Edit} />
        </Router>
    );
}

export default App;
