import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import UserList from './components/user_list';
import reducers from './reducers';
import Async from './middlewares/async'

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <UserList />
  </Provider>
  , document.querySelector('.container'));
