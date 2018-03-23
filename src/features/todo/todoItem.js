import React, { Component } from 'react';
import styled from 'styled-components';

const TodoItemWrapper = styled.div`
  display: block;
  padding: 10px;
  border: 1px solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin: 0 10px 0 0;
`;

const TodoLabel = styled.label`
  font-size: 16px;
  color: ${props => props.completed ? '#dedede' : '#333' };
  cursor: pointer;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'}
`;

const TodoActions = styled.div`
  padding: 0 10px;
`;

const TodoButton = styled.button`
  border-radius: 4px;
  font-family: Arial;
  font-size: 12px;
  cursor: pointer;
  color: #fff;
  background: #c30;
  border: none;
  padding: 5px 10px;
  
  &:hover {
    background: #a02902;
  }
`;

class TodoItem extends Component {
  onChangeStatusHandler = () => {
    this.props.onUpdate({
      ...this.props.todo,
      completed: !this.props.todo.completed
    })
  }

  onDeleteHandler = () => {
    this.props.onDelete(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    return (
      <TodoItemWrapper>
        <TodoLabel
          completed={todo.completed}
        >
          <TodoCheckbox
            checked={todo.completed}
            onChange={this.onChangeStatusHandler}
          />
          { todo.title }
        </TodoLabel>
        <TodoActions>
          <TodoButton onClick={this.onDeleteHandler}>x</TodoButton>
        </TodoActions>
      </TodoItemWrapper>
    );
  }
};

export default TodoItem
