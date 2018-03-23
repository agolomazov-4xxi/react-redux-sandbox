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
