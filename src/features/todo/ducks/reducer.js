import * as types from './types';
import updateObject from '../../../libs/updateObject';

const initialState = {
  todoList: [],
  loading: false,
  searchText: ''
};

const todoFetchStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const todoFetchSuccess = (state, action) => {
  return updateObject(state, {
    todoList: action.todoList,
    loading: false
  });
};

const todoFetchFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const todoUpdateStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const todoUpdateFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const todoUpdateSuccess = (state, action) => {
  const todoList = state.todoList;
  const todo = action.todo;
  const newList = todoList.map(item => {
    if (item.id === todo.id) {
      return {
        ...item,
        ...todo
      };
    }
    return item;
  });

  return updateObject(state, {
    todoList: newList,
    loading: false
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_FETCH_START: return todoFetchStart(state, action);
    case types.TODO_FETCH_SUCCESS: return todoFetchSuccess(state, action);
    case types.TODO_FETCH_FAIL: return todoFetchFail(state, action);
    case types.TODO_UPDATE_START: return todoUpdateStart(state, action);
    case types.TODO_UPDATE_SUCCESS: return todoUpdateSuccess(state, action);
    case types.TODO_UPDATE_FAIL: return todoUpdateFail(state, action);
    default:
      return state;
  }
};

export default reducer;
