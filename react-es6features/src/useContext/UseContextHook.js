import React from 'react'
import Parent from './Parent';

export const UserContext = React.createContext();
export const CustomerContext = React.createContext();
export const ProductContext = React.createContext();
function UseContextHook() {
    return (
        <div>
            <UserContext.Provider value={'niharika'}>
                <CustomerContext.Provider value={'Service Now'}>
                    <ProductContext.Provider value={'pavan'}>
                        <Parent />
                    </ProductContext.Provider>
                </CustomerContext.Provider>
            </UserContext.Provider>

        </div>
    )
}

export default UseContextHook;