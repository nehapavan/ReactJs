import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Welcome to Evoke'
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Thank you for joining'})
  // }

  clickHandler = () => {
    this.setState({message:'Thank you for joining'})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>VISIT</button> */}
        {/* <button onClick={() => this.clickHandler()}>VISIT</button> */}
        <button onClick={this.clickHandler}>VISIT</button>
      </div>
    )
  }
}

export default EventBind;