import * as types from './types';
import updateObject from '../../../libs/updateObject';

const initialState = {
  todoList: [],
  loading: false
};

const todoStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const todoSuccess = (state, action) => {
  return updateObject(state, {
    todoList: action.todoList,
    loading: false
  });
};

const todoFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_FETCH_START: return todoStart(state, action);
    case types.TODO_FETCH_SUCCESS: return todoSuccess(state, action);
    case types.TODO_FETCH_FAIL: return todoFail(state, action)
    default:
      return state;
  }
};

export default reducer;
