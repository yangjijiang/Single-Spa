import { createStore, combineReducers } from 'redux'
import {app1Api} from "./service/serverApi";

const initialState = {
    refresh: 0,     // 属性发布（广播）
    APPAPI: app1Api // 函数或接口发布（广播）
}

function render(state = initialState, action) {
    switch (action.type) {
        case 'REFRESH_ADD':
            console.log("---REFRESH_ADD---",state.refresh);
            return { ...state,
                refresh: state.refresh + 1
            }
        case 'REFRESH_MINUS':
            console.log("---REFRESH_MINUS---",state.refresh);
            return { ...state,
                refresh: state.refresh - 1
            }
        default:
            return state
    }
}

// 向外输出 Store
export const storeInstance = createStore(combineReducers({ namespace: () => 'projectA', render }))
