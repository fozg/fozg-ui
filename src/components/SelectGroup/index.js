import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

class SelectGroup extends React.Component {
  state = {
    isCollapse: true
  }

  _onMouseLeave = () => {
    clearInterval(this.intervalCollapse)
    this.intervalCollapse = setInterval(() => {
      this.setState({isCollapse: true})
    }, 300)
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
      <div>
        <div
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          className={styles.wrap}
          style={{textAlign: align === 'right' ? 'right' : 'left', display: 'inline-block'}}
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
                  'fozg-ui-SelectGroup',
                  {'fozg-ui-SelectGroup-active': activeIdx === idx},
                  {'fozg-ui-SelectGroup-expand': !isCollapse}
                )}
              style={{
                ...(isCollapse && activeIdx !== idx)
                  ? {
                    maxWidth: 30,
                    zIndex: 100 - Math.abs(activeIdx - idx),
                    boxShadow: (idx < activeIdx) ? '-4px 0 4px rgba(0,0,0,.1)' : '4px 0 4px rgba(0,0,0,.1)'
                  } : null,
                ...(isCollapse ? {left: `${align === 'right' ? (children.length - idx - 1) * 15 : idx * 15}px`} : null),
                height
              }}
            >
              {button}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

SelectGroup.propTypes = {
  activeIdx: PropTypes.number,
  // isCollapse: PropTypes.bool,
  onChange: PropTypes.func,
  align: PropTypes.bool,
  children: PropTypes.children,
  height: PropTypes.number
}

export default SelectGroup
