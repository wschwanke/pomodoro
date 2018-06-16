/**
 * External dependencies
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

/**
 * Internal dependencies
 */
import App from 'blocks/App';
import Homepage from 'scenes/Homepage';

const Router = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(Router);
