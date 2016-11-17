import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { Chat } from 'components';  // eslint-disable-line
import styles from './index.module.css';


const socket = io('', { path: '/api/chat' });

class ChatContainer extends Component {
  render() {
    return (
      <div>
        Chat Container
        <Chat {...this.props} socket={socket} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages.data,
    user: state.auth.user,
    typing: state.typers,
  };
}

// export default connect(mapStateToProps)(ChatContainer)

export default cssModules(ChatContainer, styles);
