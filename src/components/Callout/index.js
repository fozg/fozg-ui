import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const PADDED = {
  SMALL: 'SMALL',
  NORMAL: 'NORMAL',
  LARGE: 'LARGE'
}

const Callout = ({
  children,
  padded = 'NORMAL',
  ...props
}) => (
  <div
    className={cx(styles.callout, styles[padded])}
    {...props}
  >
    {children}
  </div>
)

Callout.padded = PADDED

Callout.propTypes = {
  children: PropTypes.children,
  padded: PropTypes.oneOf(PADDED)
}

export default Callout
