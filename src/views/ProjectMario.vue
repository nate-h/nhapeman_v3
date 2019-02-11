<template>
    <div>
        <project-summary
        v-if="$route.name !== 'Mario'"
        :img="require('img/frackoptima.png')"
        button_text="View Gameplay"
        link="/projects/mario"
        name="Mario"
      >
        <p>I worked part-time at FrackOptima as a software engineer while working full-time for Applied Invention. FrackOptima is a hydraulic fracturing company that specializes in software and services for optimal hydraulic fracturing treatments. There's several systems which make this all possible. Most of my work has been on the company website and the fracking simulator.</p>
      </project-summary>

      <project-demo
        v-if="$route.name === 'Mario'"
        :img="require('img/frackoptima.png')"
        button_text="View Gameplay"
        link="/projects/mario"
        name="Mario"
      >
        <p>testing</p>
      </project-demo>
    </div>
</template>

<script>
export default {
    name: "ProjectMario",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss">

</style>
