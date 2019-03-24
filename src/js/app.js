// Import scripts
import './bootstrap';
import Vue from 'vue';
import router from './router';

// Default components
Vue.component('navbar-component', require('./components/module/NavbarComponent.vue').default);
Vue.component('sidebar-component', require('./components/module/SidebarComponent.vue').default);

// Define Vue
new Vue({
    router,
    el: '#app',
});