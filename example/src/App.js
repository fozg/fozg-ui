import React, { Component } from 'react'
import Highlight from 'react-highlight'

import {
  Button, 
  SelectGroup,
  Callout,
  Card,
  H1, H2
} from 'fozg-ui'

export default class App extends Component {
  state = {
    SelectGroupActiveIdx: 0
  }

  render () {
    const {
      SelectGroupActiveIdx
    } = this.state;

    return (
      <div>
        <div style={{position: 'fixed', width: '100%', height: 20, backgroundColor: 'rgb(191, 94, 114)', top: 0}} />
        <div style={{backgroundColor: "rgb(191, 94, 114)", padding: 30}}>
          <img src="fozg-ui-logo.svg" width="500px"/>
          <i><h3 style={{color: '#fff'}}>just random stuff</h3></i>
        </div>
        <div className="container" style={{margin: '50px'}}>
          
          <div style={{height: 20}} />
          <H1>Button</H1>
          <p>Set of buttons</p>
          <Button>Normal Button</Button>
          {' '}
          <Button border>Normal Button with border</Button>
          {' '}
          <Button color="#673AB7">Normal Button</Button>
          {' '}
          <Button round>Button round={'{true}'}</Button>
          {' '}
          <Button round={10}>Button round={'{5}'}</Button>
          {' '}
          <Button bold>Button bold={'{true}'}</Button>
          <br></br><br/>
          <Button type={Button.type.DANGER}>Button Danger</Button>
          {' '}
          <Button type={Button.type.DANGER} border={5}>Button Danger with Border</Button>
          {' '}
          <Button type={Button.type.SUCCESS}>Button SUCCESS</Button>
          {' '}
          <Button type={Button.type.SUCCESS} border>Button SUCCESS with border</Button>
          <br/>
          <br/>
          <Button type={Button.type.WARNING}>Button WARNING</Button>
          {' '}
          <Button type={Button.type.WARNING} border>Button WARNING with border</Button>
          <br/><br/>
          <Button type={Button.type.SUCCESS} shadow={Button.shadow.MEDIUM_DARK}>Button SUCCESS with shadow MEDIUM</Button>

          <div style={{height: 20}} />
          <H1>SelectGroup</H1>
          <p>A collapsed selection buttons group</p>
          <Callout padded={Callout.padded.LARGE}>
            <div style={{textAlign: 'right'}}>
              <b>Works of the week</b>
              <SelectGroup
                activeIdx = {SelectGroupActiveIdx}
                onChange={idx => {this.setState({SelectGroupActiveIdx: idx})}}
                height={44}
              >
                <div className="SelectGroup">
                  <strong>Monday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="SelectGroup">
                  <strong>Tuesday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="SelectGroup">
                  <strong>Wednesday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="SelectGroup">
                  <strong>Thursday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="SelectGroup">
                  <strong>Friday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="SelectGroup">
                  <strong>Saturday</strong>
                  <div><i>3 Tomatos</i></div>
                </div>
                <div className="SelectGroup">
                  <strong>Sunday</strong>
                  <div><i>0 Tomatos</i></div>
                </div>
              </SelectGroup>
              <i>hover to see</i>
            </div>
          </Callout>
          <h3>Usage</h3>
          <Highlight language="javascript">{
`<SelectGroup
  activeIdx = {SelectGroupActiveIdx}
  onChange={idx => {this.setState({SelectGroupActiveIdx: idx})}}
  height={44}
>
  <div className="userDefine">
    <strong>Monday</strong>
    <div><i>3 Tomatos</i></div>
  </div>
  ...
  <div className="userDefine">
    <strong>Sunday</strong>
    <div><i>0 Tomatos</i></div>
  </div>
</SelectGroup>
          `}</Highlight>

          {/* <div style={{height: 20}} />
          <H1>Card</H1>
          <p></p>
          <Card>Choice 1</Card>{' '}
          <Card>Choice 2</Card>{' '}
          <Card>Choice 3</Card> */}
        </div>
      </div>
    )
  }
}
