import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import example from './example/reducer';

export const reducer = combineReducers({
  example,
});

const middleware = [
  thunk,
  logger,
];


export const createReduxStore = () => (createStore(reducer, {}, applyMiddleware(...middleware)));
