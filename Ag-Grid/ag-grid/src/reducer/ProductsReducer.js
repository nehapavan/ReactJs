import React from 'react'
import { ADD_PRODUCTS, DELETE_PRODUCTS } from '../actions/type';

export const initialState = {
  // products: [
  //   {
  //     ID: 1,
  //     productName: 'Realme 9 pro 5g',
  //     price: 20999,
  //     status: 'Available'
  //   },
  //   {
  //     ID: 2,
  //     productName: 'POCO X4 pro 5g',
  //     price: 17999,
  //     status: 'Available'
  //   },
  //   {
  //     ID: 1,
  //     productName: 'Samsung A13',
  //     price: 27999,
  //     status: 'Not Available'
  //   }
  // ]
  products: 50,
}


//(previous state,actions)=new state
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return state.products + action.numb

    // state.products.map(
    //   (product) => product({ ID: 4, productName: 'VIVO 23 5G', price: 23999, status: 'Coming Soon' }))

    case DELETE_PRODUCTS:
      return state.products - action.numb
    // state.products.map(
    //   (product) => product({ ID: 4, productName: 'VIVO 23 5G', price: 23999, status: 'Coming Soon' }))

    default:
      return state;

  }
};

export default ProductsReducer; 