import React from 'react'
import PropTypes from 'prop-types'

import variables from '../Variables'

import styles from './styles.css'

const Card = ({
  children,
  borderd = true,
  style
}) => (
  <div
    className={styles.card}
    style={{
      borderRadius: borderd ? 8 : 0,
      padding: 10,
      boxShadow: variables.SHADOWS.LARGE_DARK,
      ...style
    }}
  >
    <div className={styles.top} />
    <div className={styles.blur} />
    <div className={styles.children}>
      {children}
    </div>
  </div>
)

Card.propTypes = {
  children: PropTypes.children,
  borderd: PropTypes.bool,
  style: PropTypes.object
}

export default Card
