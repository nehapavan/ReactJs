import { CounterReducer } from "../CounterRedux";
import { applyMiddleware, combineReducers } from "redux";

import createSagaMiddleware from 'redux-saga';
import mySaga from "../components/saga";

const { configureStore } = require("@reduxjs/toolkit");
export const rootReducer = combineReducers({
    // Counter: CounterReducer,

});

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducers: {
        rootReducer: rootReducer,
    }
},
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga)

export default store;