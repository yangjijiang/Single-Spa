/**
 * 全局派发器（主要的职责是触发与或取各个模块对外的API）(消息总线核心代码)
 */
export class GlobalEventDistributor {
    constructor() {
        // 在函数实例化的时候,初始一个数组,保存所有模块的对外api
        this.stores = [];
    }

    /**
     * 注册
     * @param store
     */
    registerStore(store) {
        this.stores.push(store);
    }

    /**
     * 触发,这个函数会被种到每一个模块当中.便于每一个模块可以调用其他模块的 api
     * 大致是每个模块都问一遍,是否有对应的事件触发.如果每个模块都有,都会被触发.
     * @param event
     */
    dispatch(event) {
        this.stores.forEach((s) => {
            s.dispatch(event)
        });
    }

    /**
     * 获取所有模块当前的对外状态
     * @param moduleName 获取指定模块当前的对外状态，为空时拿所有模块
     */
    getState(moduleName) {
        let state = {};
        this.stores.forEach((s) => {
            let currentState = s.getState();
            state[currentState.namespace] = currentState
        });
        return moduleName ? state[moduleName] : state
    }
}