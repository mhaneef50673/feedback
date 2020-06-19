import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  NotFound
} from './components/pages';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
