// Set up your root reducer here...
import { combineReducers } from 'redux';

// Deposit reducers
import bankingReducer from './bankingReducer';

const rootReducer = combineReducers({
    //admin: adminReducer,
   banking: bankingReducer
});

export default rootReducer;
