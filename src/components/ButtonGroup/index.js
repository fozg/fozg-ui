import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

class ButtonGroup extends React.Component {
  state = {
    isCollapse: true
  }

  _onMouseLeave = () => {
    clearInterval(this.intervalCollapse)
    this.intervalCollapse = setInterval(() => {
      this.setState({isCollapse: true})
    }, 500)
  }

  _onMouseEnter = () => {
    clearInterval(this.intervalCollapse)
    this.setState({isCollapse: false})
  }

  render () {
    const {
      activeIdx = 2,
      align = 'right',
      onChange = () => {},
      children,
      height = 45
    } = this.props

    const {
      isCollapse
    } = this.state

    return (
      <div
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        className={styles.wrap}
        style={{textAlign: align === 'right' ? 'right' : 'left'}}
      >
        {children.map((button, idx) => (
          <div
            key={idx}
            onClick={() => { onChange(idx) }}
            className={
              cx(
                styles.button,
                {[styles.active]: activeIdx === idx},
                {[styles.collapse]: isCollapse},
                'fozg-ui-buttonGroup',
                {'fozg-ui-buttonGroup-active': activeIdx === idx},
                {'fozg-ui-buttonGroup-expand': !isCollapse}
              )}
            style={{
              ...(isCollapse && activeIdx !== idx)
                ? {
                  width: 60,
                  zIndex: 100 - Math.abs(activeIdx - idx),
                  boxShadow: (idx < activeIdx) ? '-3px 0 4px rgba(0,0,0,.05)' : '3px 0 4px rgba(0,0,0,.05)'
                } : null,
              ...(isCollapse ? {left: `${align === 'right' ? (children.length - idx - 1) * 40 : idx * 40}px`} : null),
              height
            }}
          >
            {button}
          </div>
        ))}
      </div>
    )
  }
}

ButtonGroup.propTypes = {
  activeIdx: PropTypes.number,
  // isCollapse: PropTypes.bool,
  onChange: PropTypes.func,
  align: PropTypes.bool,
  children: PropTypes.children,
  height: PropTypes.number
}

export default ButtonGroup
