import Vue from 'vue'
import App from './app.vue'
import project from '../project'

const AppOptions = {
    el: "#app",
    render: h => h(App, {
        domProps: {
            id: project.name
        }
    })
}

export {AppOptions, Vue, project}