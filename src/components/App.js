import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Detail from '../routers/Detail';
import Home from '../routers/Home';

function App() {
    return (
        <Router>
            <Route path="/" exec component={Home} />
            <Route path="/:id" component={Detail} />
        </Router>
    );
}

export default App;
