import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Todo from './features/todo/todoPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Todo} />
      </Switch>
    );
  }
}

export default Routes;
