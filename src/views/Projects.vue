<template>
  <div class="projects">
    <div v-if="$route.name === 'Projects'">
      <header-container header="Projects">
        <p>Here are some of my projects I've developed outside of work. I would love to show some of the stuff I've worked on at some of my jobs but am unable to.</p>
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
}
</style>
