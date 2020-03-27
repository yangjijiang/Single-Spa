import { AppOptions, Vue } from './common'

import axios from 'axios'
// api异步请求隔离
axios.defaults.baseURL = '/test';

new Vue(AppOptions)
