
// Import scripts
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// System routes
const routes = [
    {path: '/', name:'index', component: require('./components/view/IndexComponent.vue').default},
    {path: '/forms', name:'forms', component: require('./components/view/FormsComponent.vue').default},
    {path: '/alerts', name:'alerts', component: require('./components/view/AlertsComponent.vue').default},
    {path: '/tables', name:'tables', component: require('./components/view/TablesComponent.vue').default},
    {path: '/login', name:'login', component: require('./components/view/LoginComponent.vue').default},
    {path: '/register', name:'register', component: require('./components/view/RegisterComponent.vue').default},
];

// Define VueRouter
const router = new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: "active"
})

// Route change animation
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next()
})
router.afterEach((to, from) => {
    NProgress.done();
})

// Export router
export default router;
