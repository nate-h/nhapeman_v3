<template>
    <div class="resume">
        <!-- <embed
            class="pdf"
            type="application/pdf"
            scrolling="auto"
            frameBorder="0"
            :src="require('subs/resume/Nathanial.Hapeman.Resume.pdf')"
        /> -->

        <iframe
            src="https://drive.google.com/file/d/1neX11bQ2GzYngvwIw7vce8KLH7QLtaC8/preview"
            class="pdf"
            frameBorder="0"
            scrolling="auto"
        ></iframe>
    </div>
</template>

<script>
export default {
    name: "Resume",
    created() {
        //this.$store.commit("setLinks", this.links);
    },
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
