import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './ducks';
import styled from 'styled-components';

const TodoSearchWrapper = styled.div`
  border: 1px solid #dedede;
  padding: 10px;
  border-radius: 4px;
  max-width: 660px;
`;

const SearchButton = styled.button`
  border: 1px solid #c30;
  color: #fff;
  background: #c30;
  padding: 6px 10px;
  font-family: Arial;
  cursor: pointer;
  width: 15%;
  box-sizing: border-box;
`;

const SearchInput = styled.input.attrs({
  type: 'text'
})`
  padding: 6px 10px;
  border: 1px solid #dedede;
  width: 85%;
  box-sizing: border-box;
  font-family: Arial;
`;


class TodoSearch extends Component {
  state = {
    searchText: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
  
  onSearchHandler = () => {
    this.props.onSearch(this.state.searchText);
  }

  render() {
    return (
      <TodoSearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search todos..."
          onChange={this.onChangeHandler}
        />
        <SearchButton
          onClick={this.onSearchHandler}
        >
          Search
        </SearchButton>
      </TodoSearchWrapper>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onSearch: (seatchText) => dispatch(actions.todoSearch(seatchText))
});

export default connect(null, mapDispatchToProps)(TodoSearch);
