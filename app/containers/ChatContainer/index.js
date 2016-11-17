import React, { Component } from 'react';
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
    console.log(this.props);
    return (
      <div>
        Chat Container
        {this.props.messages}
        <Chat {...this.props} socket={socket} />
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  messages: state.ChatReducer.data,
  isTyping: state.ChatReducer.isTyping,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
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
