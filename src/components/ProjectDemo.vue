<template>
  <div class="project-summary l-to-r lt">
    <!-- Left -->
    <div class="leftside">
      <img :src="img">
    </div>

    <!-- Right -->
    <div class="rightside">
      <div class="header">
        <h1 class="name">{{name}}</h1>
        <router-link :to="link" class="link">{{button_text}}</router-link>
      </div>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["name", "button_text", "img", "link"]
};
</script>

<style lang="scss">
$img-side: 200px;

.project-summary {
    background-color: $light1;
    max-width: map-get($breakpoints, large);
    padding: $padding-large;
    width: 100%;

    .leftside {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: $padding-large;
        width: $img-side;
    }

    .rightside {
        flex-grow: 1;

        .header {
            @extend %l-to-r, .ca;
            margin-bottom: $margin-small;
        }
        .name {
            display: inline-block;
        }
        .link {
            margin-left: auto;
            @extend %router-link;
        }
    }

    img:first-of-type {
        height: 200px;
        width: 200px;
    }
}
</style>
