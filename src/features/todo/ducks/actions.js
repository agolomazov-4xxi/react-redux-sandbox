import * as types from './types';

// FETCHING DATA
export const todoFetch = () => ({
  type: types.TODO_FETCH
});

export const todoFetchStart = () => ({
  type: types.TODO_FETCH_START
});

export const todoFetchSuccess = (todoList) => ({
  type: types.TODO_FETCH_SUCCESS,
  todoList
});

export const todoFetchFail = () => ({
  type: types.TODO_FETCH_FAIL
});


// UPDATE DATA
export const todoUpdate = (todo) => ({
  type: types.TODO_UPDATE,
  todo
});

export const todoUpdateStart = () => ({
  type: types.TODO_UPDATE_START
});

export const todoUpdateSuccess = (todo) => ({
  type: types.TODO_UPDATE_SUCCESS,
  todo
});

export const todoUpdateFail = (todo) => ({
  type: types.TODO_UPDATE_FAIL
});


// DELETE DATA
export const todoDelete = (todo) => ({
  type: types.TODO_DELETE,
  todo
});

export const todoDeleteStart = () => ({
  type: types.TODO_DELETE_START
});

export const todoDeleteSuccess = (todo) => ({
  type: types.TODO_DELETE_SUCCESS,
  todo
});

export const todoDeleteFail = () => ({
  type: types.TODO_DELETE_FAIL
});


// SEARCH DATA
export const todoSearch = (searchText) => ({
  type: types.TODO_SEARCH,
  searchText
});

export const todoSearchStart = () => ({
  type: types.TODO_SEARCH_START
});

export const todoSearchSuccess = (searchText) => ({
  type: types.TODO_SEARCH_SUCCESS,
  searchText
});

export const todoSearchFail = () => ({
  type: types.TODO_SEARCH_FAIL
});
