import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

/**
 * H1
 * @param {React} children
 */
const H1 = ({children}) => (
  <h1 className={styles.h1}>{children}</h1>
)

H1.propTypes = {
  children: PropTypes.children
}

/**
 * H2
 * @param {React} children
 */
const H2 = ({children}) => (
  <h1 className={styles.h2}>{children}</h1>
)

H2.propTypes = {
  children: PropTypes.children
}

export {H1, H2}
