import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";
import Projects from "./views/Projects.vue";

import ProjectMario from "./views/ProjectMario.vue";
import ProjectMinesweeper from "./views/ProjectMinesweeper.vue";
import ProjectMyTunes from "./views/ProjectMyTunes.vue";
import ProjectVue from "./views/ProjectVue.vue";
import ProjectPacman from "./views/ProjectPacman.vue";

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
                    path: "minesweeper",
                    name: "Minesweeper",
                    component: ProjectMinesweeper
                },
                {
                    path: "mytunes",
                    name: "MyTunes",
                    component: ProjectMyTunes
                },
                {
                    path: "vue",
                    name: "Vue",
                    component: ProjectVue
                },
                {
                    path: "pacman",
                    name: "Pacman",
                    component: ProjectPacman
                }
            ]
        }
    ]
});
