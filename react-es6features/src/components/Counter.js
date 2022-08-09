import React, { Component } from 'react'

class Counter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }))
    this.setState({                         //setstate accepts   valuews and one callback function
      count: this.state.count + 1
    }, () => {
      console.log('Callback', this.state.count)
    })
    this.state.count = this.state.count + 1
    console.log(this.state.count)
  }

  incrementFive() {
    console.log('Inside incrementFive')
    this.increment()
    this.increment()
    this.increment()
    
  }

  render() {
    return (
      <div>
        <div><h2>Count - {this.state.count}</h2></div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter