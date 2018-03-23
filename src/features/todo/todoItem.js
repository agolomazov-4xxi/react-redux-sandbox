import React, { Component } from 'react';
import styled from 'styled-components';

const TodoItemWrapper = styled.div`
  display: block;
  padding: 10px;
  border: 1px solid #dedede;
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

class TodoItem extends Component {
  onChangeStatusHandler = () => {
    this.props.onUpdate({
      ...this.props.todo,
      completed: !this.props.todo.completed
    })
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
      </TodoItemWrapper>
    );
  }
};

export default TodoItem
