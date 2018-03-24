import { createAction } from 'redux-actions';
import * as types from './types';

// FETCHING DATA
export const todoFetch = createAction(types.TODO_FETCH);
export const todoFetchStart = createAction(types.TODO_FETCH_START);
export const todoFetchSuccess = createAction(types.TODO_FETCH_SUCCESS, payload => payload);
export const todoFetchFail = createAction(types.TODO_FETCH_FAIL);

// UPDATE DATA
export const todoUpdate = createAction(types.TODO_UPDATE, payload => payload);
export const todoUpdateStart = createAction(types.TODO_UPDATE_START);
export const todoUpdateFail = createAction(types.TODO_UPDATE_FAIL);
export const todoUpdateSuccess = createAction(types.TODO_UPDATE_SUCCESS, payload => payload);

// DELETE DATA
export const todoDelete = createAction(types.TODO_DELETE, payload => payload);
export const todoDeleteStart = createAction(types.TODO_DELETE_START);
export const todoDeleteFail = createAction(types.TODO_DELETE_FAIL);
export const todoDeleteSuccess = createAction(types.TODO_DELETE_SUCCESS, payload => payload);

// SEARCH DATA
export const todoSearch = createAction(types.TODO_SEARCH, payload => payload);
export const todoSearchStart = createAction(types.TODO_SEARCH_START);
export const todoSearchSuccess = createAction(types.TODO_SEARCH_SUCCESS, payload => payload);
export const todoSearchFail = createAction(types.TODO_SEARCH_FAIL);
