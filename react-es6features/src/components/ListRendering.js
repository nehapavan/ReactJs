import React from 'react'
import User from './User'

const ListRendering = () => {
    const names = ['rama', 'seetha', 'lakshman']
    const users = [
        {
          id: 1,
          name: 'rama',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'seetha',
          age: 25,
          skill: 'Spring Boot'
        },
        {
          id: 3,
          name: 'lakshman',
          age: 28,
          skill: '.Net'
        }
      ]
      const userList = users.map(user => <User key={user.id} user={user} />)
      const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    
    <div>{[nameList,userList]}</div>
  )
}

export default ListRendering;
