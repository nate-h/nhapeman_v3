<template>
  <div class="projects">
    <div>
      <h1 id="aboutme">About Me</h1>
      <about-me-container></about-me-container>
    </div>
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

    h1 + div {
        border-top: solid 1px #e4e6e8;
        padding-top: 30px !important;
        margin-top: -30px !important;
    }

    & > * {
        align-items: center;
        background-color: white;
        display: flex;
        flex-flow: column;
        vertical-align: middle;
        max-width: map-get($breakpoints, large);
        flex: 1 0 auto;

        &:not(:last-child) {
            margin-bottom: $margin-large;
        }

        & > h1 {
            background-color: $light1;
            padding: $padding-large;
            z-index: 999;
        }
    }
}
</style>
