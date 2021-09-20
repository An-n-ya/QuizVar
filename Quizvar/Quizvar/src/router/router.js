
import * as VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import QuizBook from '../components/QuizBook.vue'
import Welcome from '../components/Welcome.vue'
import Test from '../components/Test.vue'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/QuizPamphlet',
        component: QuizBook
    },
    {
        path: '/Welcome',
        component: Welcome
    },
    {
        path: '/Test',
        component: Test
    },

]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router