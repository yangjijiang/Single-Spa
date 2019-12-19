import Vue from 'vue'
import App from './app.vue'
import router from './router';
import project from '../project'

// 路由base(路由隔离)
router.history.base =  project.path

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




