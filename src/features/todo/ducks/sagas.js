import { call, put, takeEvery, all } from 'redux-saga/effects';
import api from '../../../api';
import * as actions from './actions';
import * as types from './types';

function* fetchTodoSaga() {
  yield put(actions.todoFetchStart());
  try {
    const response = yield call(api.todo.fetchAll);
    yield put(actions.todoFetchSuccess(response.data));
  } catch (err) {
    yield put(actions.todoFetchFail());
  }
}

export default function* todoSaga() {
  yield all([
    takeEvery(types.TODO_FETCH, fetchTodoSaga)
  ]);
}
