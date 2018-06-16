/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Footer from './Footer';
import Header from './Header';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

/**
 * Prop types
 */
App.propTypes = {
  children: PropTypes.object,
};

App.defaultProps = {
  children: {},
};

export default App;
