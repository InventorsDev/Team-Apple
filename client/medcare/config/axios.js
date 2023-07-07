import axios from "axios";
import { getToken } from "../helpers/token";
import { API_URL } from "@env";

const axiosConfig = axios.create({
  baseURL: API_URL,
});

axiosConfig.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    // if (!token) return Promise.reject("unAuthorized");
    const headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
    config.headers = headers;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosConfig;
