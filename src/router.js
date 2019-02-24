import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";
import Projects from "./views/Projects.vue";

import ProjectMario from "./views/ProjectMario.vue";
import ProjectMyTunes from "./views/ProjectMyTunes.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/resume",
            name: "Resume",
            component: Resume
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
            children: [
                {
                    path: "mario",
                    name: "Mario",
                    component: ProjectMario
                },
                {
                    path: "mytunes",
                    name: "MyTunes",
                    component: ProjectMyTunes
                }
            ]
        }
    ]
});
