import React from 'react'

const Hello = () => {
  return (
    <div className='dummyClass'>
      <h1>With JSX components</h1>
    </div>
  )

  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Without JSX components')
  // )
}

export default Hello;