<template>
    <div>
        前端微服务框架：（当前模块为projectBase）
        <div class="navbar">
            <ul>
                <a v-for="item in modules" :style="item.loaderStat<=0?'color:#6e6e6e':''" @click="singleSpaNavigate(item.path)">
                    <li>
                        {{item.name}}
                    </li>
                </a>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed:{
            modules(){
                return window.$LOADER_SPA_MODULES.map(x=>{
                    if(!window.$REGISTER_SPA_MODULES_SUCCESS.includes(x.name)) x.loaderStat = -1
                    return x
                }).filter(x=>!x.base)
            }
        },
        methods: {
            singleSpaNavigate(v) {
                singleSpaNavigate(v)
            }
        },
        mounted() {
        }
    }
</script>

<style lang='less' scoped>
    html, body {
        margin: 0px;
        padding: 0px;
    }

    .navbar {
        background-color: #111D4A;
        color: white;
        font-size: 18px;
        font-weight: bold;
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;

        ul {
            display: flex;
            align-items: center;
            list-style-type: none;
            height: 100%;

            li {
                padding-right: 24px;
                height: 100%;

                &:hover {
                    opacity: 0.8;
                }
            }
        }

        a {
            text-decoration: none;
            color: white;
        }
    }

</style>