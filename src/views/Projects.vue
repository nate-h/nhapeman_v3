<template>
  <div class="project-container">
      <!-- Content inserted here! -->
      <div class="leftside">
        <img :src="img" v-if="img">
        <div class="" v-html="video" v-if="video"></div>

      </div>
      <div class="rightside">

            <h2>
                <a :href="link">{{name}}</a>
            </h2>

          <p>
            <slot></slot>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name: "ProjectContainer",
    data() {
        return {};
    },
    props: ["name", "img", "link", "big-project", "video"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$img-side: 200px;

.project-container {
    @extend %container;

    display: inline-flex;
    flex-direction: row;
    text-align: left;

    // If big project, make container full width.
    &.big-project {
    }

    &:not(.big-project) {
    }

    .leftside {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: $padding-large;
    }

    .rightside {
        flex-grow: 1;
        padding: $padding-small;
    }

    img:first-of-type {
        height: 200px;
        width: 200px;
    }
}
</style>
