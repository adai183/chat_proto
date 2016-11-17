import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import io from 'socket.io-client'
import styles from './index.module.css'
import { Chat } from 'components'

const socket = io('', { path: '/api/chat' })

class ChatContainer extends Component {
  render() {
    return (
      <div>
        Chat Container
        <Chat {...this.props} socket={socket}  />
      </div>
    )
  }
}

export default cssModules(ChatContainer, styles);
