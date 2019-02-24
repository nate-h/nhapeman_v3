<template>
    <div class="project-demo t-to-b">
        <!-- Header -->
        <div class="header">
            <h1 class="name">{{ name }}</h1>
        </div>

        <!-- Demo -->
        <div class="demo">
            <slot name="demo"></slot>
        </div>

        <!-- Description -->
        <div class="text">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["name", "img"]
};
</script>

<style lang="scss">
.project-demo {
    background-color: $light1;
    max-width: map-get($breakpoints, large);
    padding: $padding-large;
    width: 100%;

    .header {
        margin-bottom: $margin-large;
    }

    .demo {
        // flex-grow: 0;
    }

    .text {
        padding: $padding-x-large;
    }
}
</style>
