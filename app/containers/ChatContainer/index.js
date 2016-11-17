import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { Chat } from 'components';  // eslint-disable-line
import styles from './index.module.css';
import * as ChatActionCreators from './actions';


const socket = io('', { path: '/api/chat' });

class ChatContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        Chat Container
        <Chat {...this.props} socket={socket} />
      </div>
    );
  }
}

ChatContainer.propTypes = {
  actions: PropTypes.object.isRequired,  // eslint-disable-line
  messages: PropTypes.array,  // eslint-disable-line
  isTyping: PropTypes.bool,  // eslint-disable-line
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({  // eslint-disable-line
  messages: state.ChatReducer.data,
  isTyping: state.ChatReducer.isTyping,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({  // eslint-disable-line
  actions: bindActionCreators(
    ChatActionCreators,
    dispatch,
  ),
});

const Container = cssModules(ChatContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
