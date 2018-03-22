import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './store/reducers';
import rootSagas from './store/sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    sagaMiddleware
  )
));

sagaMiddleware.run(rootSagas.todoSaga);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
