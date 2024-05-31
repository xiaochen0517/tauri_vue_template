import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// request interceptor
instance.interceptors.request.use(
    (config) => {
        // do something before request is sent
        return config;
    },
    (error) => {
        // do something with request error
        return Promise.reject(error);
    },
);

// response interceptor
instance.interceptors.response.use(
    (response) => {
        // do something with the response data
        return response;
    },
    (error) => {
        // do something with response error
        return Promise.reject(error);
    },
);

export default instance;
