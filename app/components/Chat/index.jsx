import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';
import { MessageComposer } from '../';

const user = 'Andy';

class Chat extends Component {
  static propTypes = {
    socket: PropTypes.object.isRequired, //eslint-disable-line
    actions: PropTypes.object.isRequired, //eslint-disable-line
  };
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const { socket, actions } = this.props;
    socket.emit('chat mounted', user);
    // pass in user for noe. but not necessary for customer side because customer
    // onlt ralks to a single service person
    socket.on('typing bc', user => //eslint-disable-line
      actions.typing(user),
    );
    socket.on('stop typing bc', user => //eslint-disable-line
      actions.stopTyping(user),
    );
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
  handleSave(newMessage) { // eslint-disable-line
    if (newMessage.text.length !== 0) {
      console.log('New onSave event. When should we save to Mongo?');
      console.log(newMessage);
      console.log(this.props.actions.addMessage(newMessage));
    }
  }
  render() {
    const { socket, messages } = this.props;
    return (
      <div>
        {
          messages.map((message, i) =>
            <li key={i}>
              <span>
                <b style={{ color: '#66c' }}>{message.user}</b>
                <i style={{ color: '#aad', opacity: '0.8' }}>{message.time}</i>
              </span>
              <div style={{ clear: 'both', paddingTop: '0.1em', marginTop: '-1px', paddingBottom: '0.3em' }}>{ message.text }</div>
            </li>,
        )}
        <MessageComposer socket={socket} user={user} onSave={::this.handleSave} />
      </div>
    );
  }
}

export default cssModules(Chat, styles);
