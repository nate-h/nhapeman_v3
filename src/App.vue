<template>
    <div id="app">
        <nav-bar />
        <router-view class="route-base" />
        <my-footer />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
    name: "App",
    components: {
        "nav-bar": NavBar,
        "my-footer": MyFooter
    }
};
</script>

<style lang="scss">
@import "@/scss/general.scss";
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .nav-bar {
        flex: 0 0 auto;
    }

    .route-base {
        flex: 1 0 auto;
    }

    .my-footer {
        flex: 0 0 auto;
    }
}
</style>
