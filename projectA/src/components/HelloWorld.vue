<template>
    <div class="text-color-red">
        <hr>
        <div>2：样式与静态资源（如：img）隔离</div>
        <h1 id="sdf">App 1 HelloWorld.vue</h1>
        <img src="../resource/nonedata.png" style="border:2px solid red;">
        <hr>
        <div class="">3：消息总线（即：全模板之间通信）- 计数器：{{ number }}</div>
        <div class="btn-box">
            <button class="btn" @click="handleAddBtnClick"> + </button>
            <button class="btn" @click="handleMinusBtnClick"> - </button>
        </div>
        <div class="btn-box">
            <button class="btn" @click="handleRemoveListenerBtnClick">打印监听</button>
        </div>
        <hr>
        <div>
            5：当有多技术栈模块时，统一路由协同(路由分发应用)
            <button class="btn" @click="handleRouterTo">路由 到 projectB应用</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data(){
            return{
                // number : this.$reduxStore.store.storeInstance.getState().render.refresh,
                number : 0,
            }
        },
        computed: {
            $globalStore(){
                return this.$reduxStore && this.$reduxStore.globalEventDistributor  // 全局派发器
            }
        },
        methods : {
            // //计数器加一
            // handleAddBtnClick(){
            //     // this.$reduxStore.store.storeInstance.dispatch({type: 'REFRESH_ADD'}) // 当前模块状态管理
            //     this.$reduxStore.globalEventDistributor.dispatch({type: 'REFRESH_ADD'}) // 全局派发器
            // },
            // //计数器减一
            // handleMinusBtnClick(){
            //     // this.$reduxStore.store.storeInstance.dispatch({type: 'REFRESH_MINUS'})
            //     this.$reduxStore.globalEventDistributor.dispatch({type: 'REFRESH_MINUS'})
            // },
            // //取消打印事件监听
            // handleRemoveListenerBtnClick(){
            //     // this.number = this.$reduxStore.store.storeInstance.getState().render.refresh
            //     this.number = this.$reduxStore.globalEventDistributor.getState().appx.render.refresh
            //     console.log("=====this.$reduxStore.globalEventDistributor.getState()===",this.$reduxStore.globalEventDistributor.getState())
            // }

            //计数器加一
            handleAddBtnClick(){
                this.$globalStore && this.$globalStore.dispatch({type: 'REFRESH_ADD'})
            },
            //计数器减一
            handleMinusBtnClick(){
                this.$globalStore && this.$globalStore.dispatch({type: 'REFRESH_MINUS'})
            },
            //取消打印事件监听
            handleRemoveListenerBtnClick(){
                this.number = this.$globalStore && this.$globalStore.getState("projectA").render.refresh
            },
            handleRouterTo(){
                this.$globalStore && this.$globalStore.dispatch({type: 'to',path:'/projectB'})
            }
        },
        mounted() {
            // console.log("***store***",this.$reduxStore.store);
            // console.log("***globalEventDistributor***",this.$reduxStore.globalEventDistributor);
            this.handleRemoveListenerBtnClick()
        }
    }
</script>

<style lang="less" type="text/less">
    #sdf {
        color: red
    }

    .text-color-red {
        height: 500px;
        background: url("../resource/nonedata.png");
    }
</style>

