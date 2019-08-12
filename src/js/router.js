import Default from './pages/default.vue'
import Page1 from './pages/page1.vue'
import Page2 from './pages/page2.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Default },
    { path: '/hovno', component: Page1 },
    { path: '/sracka', component: Page2 }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
