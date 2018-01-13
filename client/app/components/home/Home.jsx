import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as actions from '../../actions/actions';
import * as socketActions from '../../actions/socketActions';

class Home extends React.Component {
  static propTypes = {
    settings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    socketio: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    updateLocation: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      userName: `USER-${Math.round(Math.random() * 10000000)}`,
    };
  }

  componentWillMount() {
    const { updateLocation, addUser } = this.props;
    updateLocation();
    addUser(this.state.userName);
  }

  render() {
    const { settings, socketio } = this.props;
    const { userName } = this.state;
    if (settings) {
      // console.log(settings.toJS());
    }
    if (socketio) {
      const newUserName = socketio.get('newUserName');
      if (newUserName && newUserName !== userName) {
        console.log(newUserName, userName);
        console.log(`${newUserName} Has Joined!`);
      }
      // console.log(socketio.toJS());
    }

    return (
      <div>
        <div>HOME</div>
        <div>{userName}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  socketio: state.socketio,
});

const mapDispatchToProps = dispatch => ({
  updateLocation: () => dispatch(actions.updateLocation('HOME')),
  addUser: userName => dispatch(socketActions.addUser(userName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
