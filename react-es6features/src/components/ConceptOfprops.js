import React from 'react'

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }

const Names = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} alias {props.nickName}
      </h1>
      {props.children}
    </div>
  )
}

export default Names;