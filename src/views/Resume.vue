<template>
    <div class="resume">
        <embed
            class="pdf"
            :src="require('subs/resume/Nathanial.Hapeman.Resume.pdf')"
            type="application/pdf"
        />
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
        //this.$store.commit("setLinks", this.links);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume {
    display: flex;
    width: 100%;

    .pdf {
        width: 100%;
    }
}
</style>
