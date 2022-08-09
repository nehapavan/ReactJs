import React, { Component } from 'react'

class ClassComponents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:
        [
          {
            "id": 1,
            "name": "niharika"
          },
          {
            "id": 2,
            "name": "manu"
          },
          {
            "id": 3,
            "name": "babi"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <h3>Student details</h3>
        <ul>
          {this.state.data.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default ClassComponents;
