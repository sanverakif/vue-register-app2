import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView'
import HelloWorld from '../components/HelloWorld'
import RegisterView from '../views/RegisterView'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index-View',
    component: IndexView
}, {
    path: '/Helloworld',
    name: 'Helloworld',
    component: HelloWorld
}, {
    path: '/RegisterView',
    name: 'RegisterView',
    component: RegisterView
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router