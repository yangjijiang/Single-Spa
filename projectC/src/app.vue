<template>
    <div>
        <div class="example">
            APPB {{msg}}
            <span>less</span>
            <hr>
            <div>一：路由隔离</div>
            <p>
                <router-link to="/">Go to Home</router-link> |
                <router-link to="/test">Go to Test</router-link>
            </p>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg: 'hello! webpack4-vue-demo!'
            }
        },
        mounted() {
        }
    }
</script>

<style lang='less'>
    .example {
        color: blue;
        span{
            color: red;
        }
    }
</style>