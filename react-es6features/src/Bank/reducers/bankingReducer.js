import initialState from './initialState';

export default function bankingReducer(state = initialState, action) {

    switch (action.type) {
        case 'WITHDRAW':
            return Object.assign({}, state, { // object .assign method applies to all the stateobjects 
                withdrawals: [
                    ...state.withdrawals,
                    {
                        amount: action.amount,
                        timestamp: action.timestamp
                    }
                ],
                balance: state.balance - action.amount
            });

        case 'DEPOSIT':
            return Object.assign({}, state, { //we can also use builder callback 
                deposits: [
                    ...state.deposits,
                    {
                        amount: action.amount,
                        timestamp: action.timestamp
                    }
                ],
                balance: state.balance + action.amount
            });

        default:
            return state; //return current state which current balance
    }
}
