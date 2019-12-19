<template>
    <div class="text-color-red">
        <hr>
        <div>二：样式与静态资源（如：img）隔离</div>
        <h1 id="sdf">App B HelloWorld.vue</h1>
        <img src="../resource/nonedata.png" style="border:2px solid red;">
        <hr>
        <div class="">三：消息总线（即：全模板之间通信）- 计数器：{{ number }}</div>
        <div class="btn-box">
            <button class="btn" @click="handleAddBtnClick"> + </button>
            <button class="btn" @click="handleMinusBtnClick"> - </button>
        </div>
        <div class="btn-box">
            <button class="btn" @click="handleRemoveListenerBtnClick">打印监听</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                number : 0,
            }
        },
        computed: {
            $globalStore(){
                return this.$reduxStore && this.$reduxStore.globalEventDistributor  // 全局派发器
            }
        },
        methods : {
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
                this.number =  this.$globalStore && this.$globalStore.getState("projectA").render.refresh
            }
        },
        mounted() {
            this.handleRemoveListenerBtnClick()
        }
    }
</script>

<style lang="less" type="text/less">
    #sdf {
        color: yellow
    }

    .text-color-red {
        height: 500px;
        background: url("../resource/nonedata.png");
    }
</style>

