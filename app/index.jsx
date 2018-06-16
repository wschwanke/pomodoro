import React from 'react';
import ReactDOM from 'react-dom';
import { createReduxStore } from 'state';
import Router from 'router';

const store = createReduxStore();

ReactDOM.render(
  <Router store={store} />,
  document.getElementById('root'),
);
