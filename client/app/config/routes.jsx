import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from './../components/App';
import Home from './../components/home/Home';
import Child from './../components/child/Child';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <App />
        <Route exact path="/" component={Home} />
        <Route path="/child" component={Child} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
