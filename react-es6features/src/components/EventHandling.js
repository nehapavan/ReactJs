import React from 'react'

const EventHandling = () => {
    function clickHandler() {
        console.log('Button clicked')
      }
  return (
    <div>
         <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default EventHandling;

// import React, { Component } from 'react'

//  class EventHandling1 extends Component {
//      clickHandler() {
//         console.log('Button clicked')
//       }
//   render() {
//     return (
//       <div>
//          <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventHandling1;