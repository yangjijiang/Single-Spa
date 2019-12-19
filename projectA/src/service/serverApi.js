import axios from 'axios'

// require('./mockApi')
// const app1Api = () => axios.get("/app1Api")
// export { app1Api}


// axios.defaults.baseURL = '/api';          // 本地dev
// axios.defaults.baseURL = '/projectA/api'; // 微服务提供
axios.defaults.headers.common['Authorization'] = `Bearer erfn4Tbt38b9wpvo8QgHrbh4f88znV`
const app1Api = () => axios.get("/entity/server_only/")
export { app1Api }