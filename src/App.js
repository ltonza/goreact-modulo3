import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

console.log(`ola: ${process.env.NODE_ENV}`);

export default App;
