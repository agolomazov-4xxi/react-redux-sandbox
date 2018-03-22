import * as types from './types';

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
