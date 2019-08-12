import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import {router} from './router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
