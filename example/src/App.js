import React, { Component } from 'react'
import Highlight from 'react-highlight'

import {
  Button, 
  ButtonGroup,
  Callout,
  H1, H2
} from 'fozg-ui'

export default class App extends Component {
  state = {
    buttonGroupActiveIdx: 0
  }

  render () {
    const {
      buttonGroupActiveIdx
    } = this.state;

    return (
      <div>
        <div style={{backgroundColor: "rgb(191, 94, 114)", padding: 30}}>
          <img src="fozg-ui-logo.svg" width="500px"/>
          <i><h3 style={{color: '#fff'}}>just random stuff</h3></i>
        </div>
        <div className="container" style={{margin: '50px'}}>
          <div style={{height: 20}} />
          <H1>ButtonGroup</H1>
          <p>A collapsed selection buttons group</p>
          <Callout padded={Callout.padded.LARGE}>
            <div style={{textAlign: 'right'}}>
              <b>Works of the week</b>
              <ButtonGroup
                activeIdx = {buttonGroupActiveIdx}
                onChange={idx => {this.setState({buttonGroupActiveIdx: idx})}}
                height={44}
              >
                <div className="buttonGroup">
                  <strong>Monday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="buttonGroup">
                  <strong>Tuesday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="buttonGroup">
                  <strong>Wednesday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="buttonGroup">
                  <strong>Thursday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="buttonGroup">
                  <strong>Friday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="buttonGroup">
                  <strong>Saturday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="buttonGroup">
                  <strong>Sunday</strong>
                  <div><i>0 Tomatos</i></div>
                </div>
              </ButtonGroup>
            </div>
          </Callout>
          <h3>Usage</h3>
          <Highlight language="javascript">{
`<ButtonGroup
  activeIdx = {buttonGroupActiveIdx}
  onChange={idx => {this.setState({buttonGroupActiveIdx: idx})}}
  height={44}
>
  <div className="buttonGroup">
    <strong>Monday</strong>
    <div><i>3 Tomatos</i></div>
  </div>
  ...
  <div className="buttonGroup">
    <strong>Sunday</strong>
    <div><i>0 Tomatos</i></div>
  </div>
</ButtonGroup>
          `}</Highlight>
        </div>
      </div>
    )
  }
}
