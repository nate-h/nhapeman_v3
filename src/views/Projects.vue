<template>
  <div class="projects">
    <about-me-container></about-me-container>
  </div>
</template>

<script>
import AboutMeContainer from "@/components/AboutMe.vue";
export default {
    name: "Projects",
    components: {
        "about-me-container": AboutMeContainer
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.projects {
    padding: $padding-large;
    @extend %t-to-b, .ca;
}
</style>
