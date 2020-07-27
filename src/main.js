import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import router from './router';
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';  
import axios from 'axios'
window.axios = axios
import store from './store'
window.store = store
Vue.prototype.$http = axios;



var token;
window.token = localStorage.getItem('AToken');
//axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';



window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';


import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;



Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('add-to-cart',require('./components/AddToCart.vue').default);
Vue.component('Products-list',require('./sections/ProductList.vue').default);



Vue.use(VueRouter);

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


//const routers = new VueRouter({
 // routes: Routes
//
//});

Vue.config.productionTip = false;

const routers = new VueRouter({

});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
