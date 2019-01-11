<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/resume">Resume</router-link>
    </div> -->
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    name: "App",
    components: {
        "nav-bar": NavBar
    }
};
</script>


<style lang="scss">
#app {
    // font-family: "Avenir", Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // color: #2c3e50;

    display: flex;
    flex-direction: column;
    height: 100%;

    .nav-bar {
        flex: 0 1 auto;
    }

    .root-div {
        flex: 1 1 auto;
    }

    // &.router-link-exact-active {
    //     color: #42b983;
    // }
}
</style>
