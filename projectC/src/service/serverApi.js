import axios from 'axios'

//require('./mockApi')


axios.interceptors.request.use(function (config) {
    // const token = sessionStorage.token
    // if (token) {
    //     config.headers.common['Authorization'] = `Bearer ${sessionStorage.token}`
    // }
    // //根据vuex store内容动态设置baseurl
    // config.baseURL = store.getters.baseUrl

    console.log("=BBBB==axios.interceptors==",config);
    return config
}, function (error) {
    console.log("==BBB=&********=",error);
    // 对请求错误做些什么
    return Promise.reject(error)
})


const app1Api = () => axios.get("/passport")
export { app1Api }
