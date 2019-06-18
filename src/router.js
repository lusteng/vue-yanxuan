import Vue from "vue";
import Router from "vue-router";
import Index from "__page__/index";  


Vue.use(Router);

export default new Router({
  // mode: "history",
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
      path: "/detail/:id",
      name: "detail",
      component: () => import("__page__/goodsDetail")
    },
    {
      path: "/comment/:id",
      name: "comment",
      component: () => import("__page__/comment")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("__page__/search")
    },
    {
      path: "/catelist",
      name: "catelist",
      component: () => import("__page__/cateList")
    },
    {
      path: "/marketdesc/:id",
      name: "marketdesc",
      component: () => import("__page__/marketDesc")
    },
    {
      path: "/topic/:id",
      name: "topic",
      component: () => import("__page__/topic")
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
      path: "/404",
      name: "NotFound",
      component: () =>
        import("__page__/notFound")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ], 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});
