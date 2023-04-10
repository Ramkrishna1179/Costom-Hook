// useApi.js
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url) //'https://jsonplaceholder.typicode.com/users'
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log(json);
        setLoading(false);
        setData(json);
      });
  };
  // useEffect(() => {

  // }, []);

  const Fetched=()=>{
    setTimeout(() => {
    alert("Data fetched")
    fetchApi();
  }, 1000);
  }
  return { loading, data,Fetched };
};
export default useApi;
