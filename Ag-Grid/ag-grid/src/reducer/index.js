// Set up your root reducer here...
import { combineReducers } from 'redux';

// Deposit reducers
import CounterReducer from './CounterReducer';
import ProductsReducer from './ProductsReducer';

const rootReducer = combineReducers({
    reducer:ProductsReducer
});

export default rootReducer;
