import axios from "axios";
import NProgress from "nprogress";
import { store } from "../redux/store";
NProgress.start();
NProgress.done();
const instance = axios.create({
    baseURL: 'http://localhost:8081/',

});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const access_token = store?.getState()?.user?.account?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;
    NProgress.start();
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    NProgress.done();
    console.log(response)
    return response && response.data ? response.data : response;
}, function (error) {
    return error && error.response && error.response.data
        ? error.response.data : Promise.reject(error);
});
export default instance;