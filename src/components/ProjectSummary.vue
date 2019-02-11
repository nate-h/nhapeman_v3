<template>
  <div class="project-summary l-to-r lt">
    <div class="leftside">
      <img :src="img">
    </div>
    <div class="rightside">
      <h2>
        <small class="date right">{{button_text}}</small>
      </h2>

      <h1>{{name}}</h1>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["name", "button_text", "img"]
};
</script>

<style lang="scss">
$img-side: 200px;

.project-summary {
    background-color: $light1;
    //margin: $margin-small 0;
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

        .date {
            margin-left: $margin-large;
            color: $dark3;
        }
    }

    img:first-of-type {
        height: 200px;
        width: 200px;
    }
}
</style>
