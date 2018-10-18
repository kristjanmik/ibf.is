import React from 'react'
import PropTypes from 'prop-types'
import './global.scss'
import styles from './styles.module.scss'

const Layout = ({ children }) => (
  <div className={styles.root}>
    {children} 
  </div>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
