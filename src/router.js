import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Products from "./views/Products.vue";
import Orders from "./views/Orders.vue";
import Profile from "./views/Profile.vue";


Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
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
            path: "/admin/products",
            name: "products",
            component: Products
          },
          {
            path: "/admin/orders",
            name: "orders",
            component: Orders
          },
          {
            path: "/admin/profile",
            name: "profile",
            component: Profile
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

  export default router;