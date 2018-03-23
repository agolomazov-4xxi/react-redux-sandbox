import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions, selectors} from './ducks';
import TodoItem from './todoItem';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  max-width: 680px;
  min-width: 300px;
`;

const TodoItemWrapper = styled.div`
  margin: 0 0 10px;
  
  &:last-child {
    margin: 0;
  }
`;

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  onUpdateHandler = (item) => {
    this.props.updateTodo(item)
  }

  onDeleteHandler = (item) => {
    this.props.removeTodo(item);
  }

  renderItems = (list) => (
    list.map(item => (
      <TodoItemWrapper key={item.id}>
        <TodoItem
          todo={item}
          onUpdate={ (item) => { this.onUpdateHandler(item) } }
          onDelete={ (item) => { this.onDeleteHandler(item) } }
        />
      </TodoItemWrapper>
    ))
  )

  render() {
    return (
      <TodoListWrapper>
        { this.props.fetchLoading ? 'Loading...' : this.renderItems(this.props.todoList) }
      </TodoListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  todoList: selectors.todoSelector(state),
  fetchLoading: state.todo.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(actions.todoFetch()),
  updateTodo: (todo) => dispatch(actions.todoUpdate(todo)),
  removeTodo: (todo) => dispatch(actions.todoDelete(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
