/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";
const axios = require("axios");

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async (url) => {
      try {
        const response = await axios.get(url),
          json = await response.data;

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPending(true);
        setError(err.response);
        console.log(err);
      }
    };
    getUser(url);
  }, [url]);

  return { data, isPending, error };
};
