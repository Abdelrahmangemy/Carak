import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Advertice from "./views/Advertice.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import SpareParts from "./views/SpareParts.vue";
import Users from "./views/Users.vue";
import CarModel from "./views/CarModel.vue";
import UsedCars from "./views/UsedCars.vue";
import NewCars from "./views/NewCars.vue";
import MaintanceCenter from "./views/MaintanceCenter.vue";
import Offers from "./views/Offers.vue";
import Profile from "./views/Profile.vue";
import Login from './components/Login'
 

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/admin",
        name: "admin",
        component: Admin,
        meta: { requiresAuth: true},
        children:[
          {
            path: "/admin/overview",
            name: "overview",
            component: Overview
          },
          {
            path: "/admin/users",
            name: "users",
            component: Users
          },
          {
            path: "/admin/SpareParts",
            name: "spareparts",
            component: SpareParts
          },
          {
            path: "/admin/carmodel",
            name: "carmodel",
            component: CarModel
          },
          {
            path: "/admin/usedcars",
            name: "usedcars",
            component: UsedCars
          },
          {
            path: "/admin/newcars",
            name: "newcars",
            component: NewCars
          },
          {
            path: "/admin/maintancecenter",
            name: "maintancecenter",
            component: MaintanceCenter
          },
          {
            path: "/admin/offers",
            name: "offers",
            component: Offers
          },
          {
            path: "/admin/advertice",
            name: "advertice",
            component: Advertice
          },

        ]
      },
      {
        path: "/checkout",
        name: "checkout",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./views/Checkout.vue")
      },
      
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./views/About.vue")
      },
      {
        path: "/products",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./sections/Products.vue")
      }
    ]
  });
  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })
  export default router;