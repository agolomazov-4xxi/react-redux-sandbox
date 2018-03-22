import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './ducks';

class Todo extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  render () {
    return (
      <div>TODO APP</div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
  fetchLoading: state.todo.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(actions.todoFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
