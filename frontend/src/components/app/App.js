import React from 'react';
import '../../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Homepage from '../Homepage';
import Header from '../common/Header';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
