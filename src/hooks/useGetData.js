import React, { useState, useEffect } from "react";
import { getApi } from "./getApi.js";

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApi()
      .then((response) => {
        setData(response.response.assumptionData[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Hola soy un  error' + error);
        setLoading(false);
      });
  }, []);


  return data;
};


export default useGetData;