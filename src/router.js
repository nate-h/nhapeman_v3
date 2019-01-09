import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/resume",
            name: "resume",
            component: Resume
        }
        // {
        //   path: "/about",
        //   name: "about",
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: function() {
        //     return import(/* webpackChunkName: "about" */ "./views/About.vue");
        //   }
        // }
    ]
});
