import React, { Component } from 'react';
import DefaultLayout from '../../hoc/layouts/default';
import TodoList from './todoList';

class TodoPage extends Component {
  render() {
    return (
      <DefaultLayout>
        <h1>TodoPage Application</h1>
        <TodoList/>
      </DefaultLayout>
    );
  }
}

export default TodoPage;
