import React from 'react'
import { CustomerContext, UserContext } from './UseContextHook'

const Child2 = () => {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <CustomerContext.Consumer>
                            {customer => {
                                return (<div>{user}-{customer}</div>)
                            }}
                        </CustomerContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default Child2;