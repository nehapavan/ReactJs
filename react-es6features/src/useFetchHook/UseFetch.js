import React,{ useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
//async/await 
// if you were to start setInterval in useEffect you would return a function 
// for cleaning up the interval to avoid memory leaks.

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return data;
}