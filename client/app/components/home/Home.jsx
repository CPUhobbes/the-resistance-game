import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as bootstrap from 'react-bootstrap';
import * as actions from '../../actions/actions';
import * as socketActions from '../../actions/socketActions';
import helpers from '../../helpers/helpers';

const {
  Button,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} = bootstrap;

class Home extends React.Component {
  static propTypes = {
    settings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    socketio: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    updateLocation: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    createGame: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      userName: `USER-${Math.round(Math.random() * 10000000)}`,
      showJoinGameModal: false,
      showCreateGameModal: false,
      modalNameInput: '',
      modalPassInput: '',
      newGameName: '',
    };
  }

  componentWillMount() {
    const { updateLocation, addUser } = this.props;
    updateLocation();
    addUser(this.state.userName);
  }

  onJoinGame = () => {};
  onCreateGame = () => {
    const { createGame } = this.props;
    const { newGameName, modalPassInput } = this.state;

    createGame(newGameName, modalPassInput);
  };

  getValidationState() {
    const { modalPassInput } = this.state;
    const passLength = modalPassInput.length;

    if (passLength > 5) return 'success';
    else if (passLength > 0) return 'error';
    return null;
  }

  handleInputChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value });
  };

  toggleJoinGameModal = () => {
    const { showJoinGameModal } = this.state;
    this.setState({
      showJoinGameModal: !showJoinGameModal,
      modalNameInput: '',
      modalPassInput: '',
    });
  };

  toggleCreateGameModal = async () => {
    const { showCreateGameModal } = this.state;
    const newGameName = await helpers.getNewGameName();

    this.setState({
      showCreateGameModal: !showCreateGameModal,
      modalPassInput: '',
      newGameName: newGameName.data,
    });
  };

  renderJoinGameModal() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Join a Game</Modal.Title>
          </Modal.Header>

          <Modal.Body>One fine body...</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.toggleJoinGameModal}>Close</Button>
            <Button onClick={this.onJoinGame} bsStyle="primary">
              Join Game
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  renderCreateGameModal() {
    const { newGameName } = this.state;

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Create a Game</Modal.Title>
          </Modal.Header>

          <form>
            <h2 style={{ textTransform: 'capitalize' }}>
              Game Name: {newGameName}
            </h2>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Enter Game Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.modalPassInput}
                placeholder="Create Password"
                onChange={e => this.handleInputChange(e, 'modalPassInput')}
              />
              <FormControl.Feedback />
              <HelpBlock>Password must be at least 6 characters long</HelpBlock>
            </FormGroup>
          </form>

          <Modal.Footer>
            <Button onClick={this.toggleCreateGameModal}>Close</Button>
            <Button onClick={this.onCreateGame} bsStyle="primary">
              Join Game
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  render() {
    const { settings, socketio } = this.props;
    const { userName, showJoinGameModal, showCreateGameModal } = this.state;
    const joinGameModal = showJoinGameModal ? this.renderJoinGameModal() : null;
    const createGameModal = showCreateGameModal
      ? this.renderCreateGameModal()
      : null;

    if (settings) {
      // console.log(settings);
    }

    if (socketio) {
      const newUserName = socketio.get('newUserName');
      if (newUserName && newUserName !== userName) {
        console.log(newUserName, userName);
        console.log(`${newUserName} Has Joined!`);
      }
      console.log(socketio.get('message'));
    }
    return (
      <div>
        <div>HOME</div>
        <Button onClick={this.toggleCreateGameModal}>Create a Game</Button>
        <Button onClick={this.toggleJoinGameModal}>Join a Game</Button>
        {socketio.get('message')}
        {joinGameModal}
        {createGameModal}
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
  createGame: (gameName, password) =>
    dispatch(socketActions.createGame(gameName, password)),
  addUser: userName => dispatch(socketActions.addUser(userName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
