import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';
import { MessageComposer } from '../';

const user = 'Andy';

class Chat extends Component {
  static propTypes = {
    socket: PropTypes.object.isRequired,
  };
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const { socket } = this.props;
    socket.emit('chat mounted', user);
    /*
    socket.on('new bc message', msg =>
      dispatch(actions.receiveRawMessage(msg))
    );
    socket.on('typing bc', user =>
      dispatch(actions.typing(user))
    );
    socket.on('stop typing bc', user =>
      dispatch(actions.stopTyping(user))
    );
    socket.on('new channel', channel =>
      dispatch(actions.receiveRawChannel(channel))
    );
    socket.on('receive socket', socketID =>
      dispatch(authActions.receiveSocket(socketID))
    );
    socket.on('receive private channel', channel =>
      dispatch(actions.receiveRawChannel(channel))
    );
    */
  }
  handleSave(newMessage) {
    if (newMessage.text.length !== 0) {
      console.log('New onSave event. When should we save to Mongo?');
      console.log(newMessage);
    }
  }
  render() {
    const { socket } = this.props;
    return (
      <div>
        Chat
        <MessageComposer socket={socket}  user={user} onSave={::this.handleSave} />
      </div>
    );
  }
}

export default cssModules(Chat, styles);
