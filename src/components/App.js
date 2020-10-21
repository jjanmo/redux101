import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Detail from '../routers/Detail';
import Home from '../routers/Home';

function App() {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </Router>
    );
}

export default App;
