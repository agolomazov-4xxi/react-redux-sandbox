import React, { Component } from 'react';
import DefaultLayout from '../../hoc/layouts/default';
import Todo from './todo';

class TodoPage extends Component {
  render() {
    return (
      <DefaultLayout>
        <h1>TodoPage Application</h1>
        <Todo/>
      </DefaultLayout>
    );
  }
}

export default TodoPage;