import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import variables from '../Variables'
import styles from './styles.css'

const TYPE = {
  NORMAL: 'NORMAL',
  DANGER: 'DANGER',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING'
}

const SHADOW = variables.SHADOWS

const Button = ({
  children,
  type = 'NORMAL',
  color,
  backgroundColor,
  hoverColor,
  hoverBackgroundColor,
  round,
  bold,
  border,
  borderColor,
  shadow,
  ...props
}) => (
  <div
    className={cx(styles.button, styles[type])}
    style={{
      color,
      backgroundColor,
      hoverColor,
      hoverBackgroundColor,
      borderRadius: round ? ((typeof round === 'number' ? round : 50)) : null,
      fontWeight: bold ? 600 : 400,
      borderWidth: border ? ((typeof round === 'number' ? round : 2)) : 0,
      borderColor,
      boxShadow: shadow
    }}
    {...props}
  >
    {children}
  </div>
)

Button.type = TYPE
Button.shadow = SHADOW

Button.propTypes = {
  children: PropTypes.children,
  type: PropTypes.oneOf(TYPE),
  shadow: PropTypes.oneOf(SHADOW)
}

export default Button
