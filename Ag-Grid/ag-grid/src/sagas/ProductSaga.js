import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, deleteProducts } from '../actions/ProductActions';
import { initialState } from '../reducer/ProductsReducer';

function ProductSaga() {
    const greet = () => {
        console.log("welcome to to Redux-Saga")

    }
    const availableproducts = useSelector((state) => state.reducer.products) //selector takes the current state from
    const dispatch = useDispatch();

    const addpro = () => {
        dispatch(addProducts(20))
    }
    const deletepro = () => {
        dispatch(deleteProducts(10))
    }
    return (
        <div className='App'>
            <h1>  Welcome to Saga</h1>
            <button onClick={greet}>Greeting Message</button>
            <h3>List Of Products</h3>
            <h4>Products:{availableproducts}</h4>
            <div style={{ flex: 1, flexDirection: 'row' }}>
                <button className='btn btn-md success' onClick={addpro}>ADD_PRODUCTS</button>
                <button className='btn btn md danger' onClick={deletepro}>DELETE_PRODUCTS</button>
            </div>
        </div>

    )
}

export default ProductSaga;