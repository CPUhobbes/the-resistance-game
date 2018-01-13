import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import Header from './common/Header';

class App extends React.Component {
  static propTypes = {
    loadAPI: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { loadAPI } = this.props;
    loadAPI();
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // You can now say this.props.api
  // OwnProps is the props passed to the current component <Home success=true />
  // Can be used to check ie, stillSuccess: ownProps.success === state.success
  settings: state.settings,
});

// Maps actions to props
const mapDispatchToProps = dispatch => ({
  // You can now say this.props.loadAPI()
  loadAPI: () => dispatch(actions.loadAPI()),
});

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App);
