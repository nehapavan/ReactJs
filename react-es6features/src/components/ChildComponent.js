import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.eventHandler('logged In ...')}>alert</button>
    </div>
  )
}

export default ChildComponent;