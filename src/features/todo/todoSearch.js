import React, { Component } from 'react';
import styled from 'styled-components';

const TodoSearchWrapper = styled.div`
  border: 1px solid #dedede;
  padding: 10px;
  border-radius: 4px;
`;


class TodoSearch extends Component {
  render() {
    return (
      <TodoSearchWrapper>
        <input
          type="text"
          placeholder="Search todos..."
        />
        <button>Search</button>
      </TodoSearchWrapper>
    );
  }
};

export default TodoSearch;
