import Vue from 'vue'
import App from './app.vue'
import router from './router';
import project from '../project'

// 路由base
// router.history.base =  project.path

const AppOptions = {
    el: "#app",
    render: h => h(App, {
        domProps: {
            id: project.name
        }
    }),
    router: router
}
export {AppOptions, Vue, project}