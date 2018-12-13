import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const createApropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createApropriateStore(reducers, compose(applyMiddleware(...[])));

export default store;
