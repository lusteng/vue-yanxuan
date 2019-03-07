import Vue from "vue";
import Router from "vue-router";
import Index from "__page__/index";  


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: "/",
      name: "index",
      component: Index
    }, 
    {
      path: "/item/:index",
      name: "items",
      component: () => import("__page__/items")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./page/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("__page__/login")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
