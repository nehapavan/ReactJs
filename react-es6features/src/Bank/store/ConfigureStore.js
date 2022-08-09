import rootReducer from "../reducers";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        rootReducer: rootReducer
    },
})
export default store;