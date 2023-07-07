import { useState, useEffect } from "react";
import axiosConfig from "../config/axios";

export default useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: endpoint,
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axiosConfig.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("An error occured");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);

    fetchData();
  };

  return { data, isLoading, error, refetch };
};
