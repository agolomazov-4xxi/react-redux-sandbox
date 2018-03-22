import { combineReducers } from 'redux';

import todoReducer from '../features/todo/ducks';

export default combineReducers({
  todo: todoReducer
});
