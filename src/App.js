import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  NotFound
} from './components/pages';

import './App.scss';

/**
 * Renders the application with 2 routes
 * / route for landing page
 * * route for matching any other urls and it will render NotFound component
 */
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
