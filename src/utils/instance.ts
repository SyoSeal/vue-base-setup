import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, errorHandler);

instance.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
}, errorHandler);

export default instance;
