<template>
    <div class="projects">
        <div v-if="$route.name === 'Projects'" class="list">
            <header-container header="Projects">
                <p>
                    Here are some of the fun coding projects I've created
                    outside of work. Enjoy!
                </p>
            </header-container>

            <project-mario></project-mario>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import ProjectMario from "@/views/ProjectMario.vue";
export default {
    name: "Projects",
    components: {
        "project-mario": ProjectMario
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
