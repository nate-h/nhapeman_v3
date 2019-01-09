<template>
  <div class="root-div">
    <embed class="pdf"
        :src="require('root/resume/Nathanial.Hapeman.Resume.pdf')"
        type='application/pdf'
    >
  </div>
</template>

<script>
export default {
    name: "Resume",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            links: [{ name: "Home", link: "/home" }]
        };
    },
    created() {
        this.$store.commit("setLinks", this.links);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.root-div {
    background-color: #525659;
    overflow: hidden !important;
    width: calc(100% - 220px);

    .pdf {
        width: 100%;
        height: 100%;
    }
}
</style>
