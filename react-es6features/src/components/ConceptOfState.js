import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'Welcome to Leonia Resorts '
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for Visiting!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Visit</button>
      </div>
    )
  }
}

export default Message