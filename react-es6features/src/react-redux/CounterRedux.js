
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'


export const initialState = {
    count: 0,
}
export const increment = () => ({
    type: INCREMENT,
});
export const decrement = () => ({
    type: DECREMENT,
})
export const CounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT: 
        return{
            ...state,
            count: state.count + 10
        }
        case DECREMENT: 
        return{
            ...state,
            count: state.count - 5
        }
        default:
            return state;
    }
}