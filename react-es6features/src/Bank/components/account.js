import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deposit, withdraw } from '../actions/bankActions'

export function Account() {
    const balance = useSelector((state) => state.rootReducer.banking.balance) //selector takes the current state from
    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='h2'>Balance :{balance}</h2>
            <div className=''>
                <button onClick={() => dispatch(deposit(10000))}
                >   Deposit Amount
                </button>
                
                <button onClick={() => dispatch(withdraw(2000))}
                >  Withdraw Amount
                </button>
            </div>
        </div>
    )
}