import {createStore, combineReducers} from 'redux'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

// 对外输出一个to的接口,当一个模块需要跳转界面的时候,会向所有的模块调用这个接口,
// 然后对应的模块会直接渲染到正确的页面
function to(state, action) {
    if (action.type !== 'to') return {...state, path: action.path}
    history.replace(action.path)
    return {...state, path: action.path}
}

export const storeInstance = createStore(combineReducers({namespace: () => 'base', to}))

export {history}