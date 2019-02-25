<template>
    <div class="projects">
        <div v-if="$route.name === 'Projects'" class="list">
            <header-container header="Projects">
                <p>
                    Here are some of the fun coding projects I created outside
                    of work. Enjoy!
                </p>
            </header-container>

            <project-mario></project-mario>
            <project-my-tunes></project-my-tunes>
            <project-vue></project-vue>
            <project-pacman></project-pacman>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import ProjectMario from "@/views/ProjectMario.vue";
import ProjectMyTunes from "@/views/ProjectMyTunes.vue";
import ProjectVue from "@/views/ProjectVue.vue";
import ProjectPacman from "@/views/ProjectPacman.vue";
export default {
    name: "Projects",
    components: {
        "project-mario": ProjectMario,
        "project-my-tunes": ProjectMyTunes,
        "project-vue": ProjectVue,
        "project-pacman": ProjectPacman
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
