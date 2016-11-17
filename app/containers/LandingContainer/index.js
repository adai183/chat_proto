import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './index.module.scss'
import { ChatContainer } from 'containers'

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={styles.landing}>
        <ChatContainer />
      </div>
    )
  }
}
export default cssModules(Landing, styles)
