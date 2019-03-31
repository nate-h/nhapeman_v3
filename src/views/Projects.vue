<template>
    <div class="projects">
        <div v-if="$route.name === 'Projects'" class="list">
            <header-container header="Projects">
                <p>
                    Here are some of the fun coding projects I created outside
                    of work. Enjoy!
                </p>
            </header-container>

            <div v-for="project in projects" :key="project.name">
                <component v-bind:is="project"></component>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import ProjectMario from "@/views/ProjectMario.vue";
import ProjectMinesweeper from "@/views/ProjectMinesweeper.vue";
import ProjectMyTunes from "@/views/ProjectMyTunes.vue";
import ProjectVue from "@/views/ProjectVue.vue";
import ProjectPacman from "@/views/ProjectPacman.vue";
import ProjectPixelChaser from "@/views/ProjectPixelChaser.vue";
export default {
    name: "Projects",
    created() {
        console.log("ProjectMario :", ProjectMario);
        this.projects = [
            ProjectMario,
            ProjectPixelChaser,
            ProjectVue,
            ProjectMyTunes,
            ProjectPacman,
            ProjectMinesweeper
        ];
        this.projects = this.projects.filter(p => p.listed === true);
    }
};
</script>

<style lang="scss">
.projects {
    padding: $padding-large;
    @extend %t-to-b, .ca;

    .list > *:not(:last-child) {
        margin-bottom: $margin-large;
    }
}
</style>
