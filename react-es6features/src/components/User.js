import React from 'react'

const User = ({ user }) => {
    
    return (
        <div>
            <h2>
                Hey {user.name}
                <pre> You Employee Details are :
                    {
                        `           
          Id: ${user.id}
            Name:${user.name}
           Age: ${user.age}
           Skill: ${user.skill} 
            `
                    }
                </pre>
            </h2>
        </div>
    )
}

export default User;

