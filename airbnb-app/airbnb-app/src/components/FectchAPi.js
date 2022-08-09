import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import UseFetchHook from './UseFetchHook';
const FectchAPi = () => {
    const AIRBNB_API = "http://localhost:8080/evoke/getHotels";
    // const { address, loading, error, reFetch } = UseFetchHook(AIRBNB_API);



    const [address, setaddress] = useState({});  //as we know not all the data will be same it may be array object so we keep null
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(AIRBNB_API)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setaddress(json)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [AIRBNB_API]);
    if (loading) return <h1>Loading........</h1>
    if (error) console.log(error);
    const reFetch = () => {
        setLoading(true);
        fetch(AIRBNB_API)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setaddress(json)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <h3>Lists of customers
            </h3>
            {
                
                address.length ?
                    address.map(list => <li key={list.registerId}>{list.hotelName}</li>) :
                    null

            }
            <button onClick={reFetch}>reFetch</button>

        </div>
    )
}

export default FectchAPi