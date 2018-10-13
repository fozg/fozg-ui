import React from 'react'
import PropTypes from 'prop-types'

import H1 from './Heading'

const Header = ({title, subTitle}) => (
  <div style={{
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#eee',
    borderRadius: 10
  }}>
    <H1>
      {title}
    </H1>
    <h5>{subTitle}</h5>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default Header
