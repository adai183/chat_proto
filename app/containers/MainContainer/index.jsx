import React from 'react'
import cssModules from 'react-css-modules'
import '../../styles/styles.scss'
import styles from './index.module.scss'

/* eslint-disable */
import {
  Navbar,
  App,
} from 'open-ui';
/* eslint-enable */
const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const logo = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true'

const MainContainer = (props) => (
  <App centered={false} inline>
    <Navbar links={links} logo={logo} />
    <main>
      {props.children}
    </main>
  </App>
)

export default cssModules(MainContainer, styles)
