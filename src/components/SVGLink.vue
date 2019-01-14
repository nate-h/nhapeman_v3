<template>
    <a :href="link" class="svg-link">
        <div v-once v-html="src" class="svg-injector"></div>
        <p class="svg-label"><slot></slot></p>
    </a>

</template>

<script>
export default {
    props: ["src", "link", "color-off", "color-hover", "color-down"]
};
</script>

<style lang="scss">
$logo-size: 25px;

.svg-link {
    @extend %v-center;

    transition: all $transition-time $transition-function;

    .svg-injector {
        height: $logo-size;
        width: $logo-size;
    }

    .svg-label {
        margin-left: $margin;
    }
}
</style>
