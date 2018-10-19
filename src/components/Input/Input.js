import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = () => (
  <div className={styles.root}>
    {children} 
  </div>

)

Input.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Input
