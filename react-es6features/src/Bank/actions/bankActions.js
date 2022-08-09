
export function deposit(amount) {
    return function (dispatch) {

        return dispatch({
            type: 'DEPOSIT',
            timestamp: Date(),
            amount: Math.abs(amount)    //abs-absolute
        });
    };
}
export function withdraw(amount) {
    return function (dispatch) {

        return dispatch({
            type: 'WITHDRAW',
            timestamp: Date(),
            amount: Math.abs(amount)
        });
    };
}
