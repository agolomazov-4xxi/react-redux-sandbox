import {createSelector} from 'reselect';
import * as R from 'ramda';

const todos = state => R.pathOr([], ['todo', 'todoList'], state);
const searchText = state => R.pathOr('', ['todo', 'searchText'], state);

export const todoSelector = createSelector(
  todos,
  searchText,
  (todos, search) => todos.filter(todo =>
    [todo.title.includes(search),
     todo.description.includes(search)
    ].some(Boolean)
  )
);
