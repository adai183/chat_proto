import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import moment from 'moment';
import uuid from 'node-uuid';
import styles from './index.module.css';

class MessageComposer extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
    socket: PropTypes.object.isRequired, // eslint-disable-line
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false,
    };
  }
  handleSubmit(event) {
    const { user, socket } = this.props;
    const text = event.target.value.trim();
    if (event.which === 13) {
      event.preventDefault();
      const newMessage = {
        id: `${Date.now()}${uuid.v4()}`,
        text,
        user,
        time: moment.utc().format('lll'),
      };
      socket.emit('new message', newMessage);
      // socket.emit('stop typing', { user });
      this.props.onSave(newMessage);
      this.setState({ text: '', typing: false });
    }
  }
  handleChange(event) {
    const { socket, user } = this.props;
    this.setState({ text: event.target.value });
    if (event.target.value.length > 0 && !this.state.typing) {
      socket.emit('typing', { user });
      this.setState({ typing: true });
    }
    if (event.target.value.length === 0 && this.state.typing) {
      socket.emit('stop typing', { user });
      this.setState({ typing: false });
    }
  }
  render() {
    return (
      <div>
        <input
          type="textarea"
          name="message"
          ref={"messageComposer"}
          autoFocus="true"
          placeholder="Type here to chat!"
          value={this.state.text}
          onChange={::this.handleChange}
          onKeyDown={::this.handleSubmit}
        />
      </div>
    );
  }
}

export default cssModules(MessageComposer, styles);
