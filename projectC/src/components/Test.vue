<template>
    <div>
        <div>四: api异步请求隔离</div>
        <h1>Vue AppB Test.vue--{{msg}}--AppBApi: {{appData}}</h1>
        <button @click="getApp">提交</button>
    </div>
</template>
<script>
    import {app1Api} from "../service/serverApi";

    export default {
        data() {
            return {
                msg: 'test hello world!!!',
                appData: null
            }
        },
        methods: {
            getApp() {
                app1Api().then(response => {
                    this.appData = response.data
                })
            }
        },
        mounted() {
            this.getApp()
        }
    }
</script>