import React, { useContext } from 'react'
import { CustomerContext, ProductContext, UserContext } from './UseContextHook'

function Child  () {
        const user = useContext(UserContext);
    const customer = useContext(CustomerContext);
    const product =useContext(ProductContext);
    return (
        <div>
            {user}-{customer}-{product}
        </div>
    )
}

export default Child;