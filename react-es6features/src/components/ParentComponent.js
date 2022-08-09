import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: 'user!'
    }

    this.display = this.display.bind(this)
  }

  display(message) {
    alert(`Hey  ${this.state.userName} You are ${message}`)
  }

  render() {
    return (
      <div>
        <ChildComponent eventHandler={this.display} />
      </div>
    )
  }
}

export default ParentComponent;