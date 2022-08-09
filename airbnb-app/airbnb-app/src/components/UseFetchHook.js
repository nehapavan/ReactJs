// import axios from "axios";
// import React, { useState, useEffect } from "react";


// //hook wont return jsx only return data that might want to use when we call hook
// function UseFetchHook(url) {
//     const [address, setaddress] = useState({});  //as we know not all the data will be same it may be array object so we keep null
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
    
//     useEffect(() => {
//         setLoading(true);
//         axios.get(url)
//             .then((response) => {
//                 setaddress(response.data);
                
//                 // .then((response) => response.json())
//                 // .then((json) => {
//                 //     setaddress(json)

//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }, [url]);

//     const reFetch = () => {
//         setLoading(true);
//         axios.get(url)
//             .then((response) => {
//                 setaddress(response.data);
//                 // .then((response) => response.json())
//                 // .then((json) => {
//                 //     setaddress(json)

//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }
//     return { address, loading, error, reFetch };


// }

// export default UseFetchHook;