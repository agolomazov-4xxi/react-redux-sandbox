import React, {Component} from 'react';
import styled from 'styled-components';
import DefaultLayout from '../../hoc/layouts/default';
import TodoList from './todoList';
import TodoSearch from './todoSearch';

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

class TodoPage extends Component {
  render() {
    return (
      <DefaultLayout>
        <h1>TodoPage Application</h1>
        <SearchContainer>
          <TodoSearch/>
        </SearchContainer>
        <TodoList/>
      </DefaultLayout>
    );
  }
}

export default TodoPage;
