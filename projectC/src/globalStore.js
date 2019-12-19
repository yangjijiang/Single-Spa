// import { createStore, combineReducers } from 'redux'
//
// const initialState = {
//     refresh: 0
// }
//
// function render(state = initialState, action) {
//     switch (action.type) {
//         case 'REFRESH_ADD':
//             console.log("---REFRESH_ADD---",state.refresh);
//             return { ...state,
//                 refresh: state.refresh + 1
//             }
//         case 'REFRESH_MINUS':
//             console.log("---REFRESH_MINUS---",state.refresh);
//             return { ...state,
//                 refresh: state.refresh - 1
//             }
//         default:
//             return state
//     }
// }
//
// // 向外输出 Store
// export const storeInstance = createStore(combineReducers({ namespace: () => 'projectC', render }))