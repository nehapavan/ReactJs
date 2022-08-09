import React from 'react'
import { ADD_PRODUCTS, GET_PRODUCTS } from './type'

export function addProducts  (numb) {
    return function (dispatch) {
        return dispatch({
            type: 'ADD_PRODUCTS',
            numb: Math.abs(numb),
            info:'we`ve added product successfully'
        })
    }
}

export function getProducts (numb) {
    return function (dispatch) {
        return dispatch({
            type: 'GET_PRODUCTS'
        })
    }
}

export const updateProducts = (numb) => {
    return function (dispatch) {
        return dispatch({
            type: 'UPDATE_PRODUCTS'
        })
    }
}

export const deleteProducts = (numb) => {
    return function (dispatch) {
        return dispatch({
            type: 'DELETE_PRODUCTS',
            numb: Math.abs(numb)
        })
    }
}

