import { ADD_PRODUCTS, DELETE_PRODUCTS, PRODUCTS_ADDED, PRODUCTS_DELETED } from "./type"


export const addedTaskActions = (data) => {
    return {
        type: ADD_PRODUCTS,
        data
    }
}
export const taskAddedActions = () => {
    return {
        type: PRODUCTS_ADDED
    }
}
export const deleteTaskActions = () => {
    return {
        type: DELETE_PRODUCTS
    }
}
export const taskDeletedActions = () => {
    return {
        type: PRODUCTS_DELETED
    }
}