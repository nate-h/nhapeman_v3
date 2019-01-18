<template>
    <a :href="link" class="svg-link">
        <slot></slot>
        <p class="svg-label">{{label}}</p>
    </a>

</template>

<script>
export default {
    props: ["link", "label", "color-off", "color-hover", "color-down"]
};
</script>

<style lang="scss">
$logo-size: 25px;

.svg-link {
    @extend %l-to-r, %pop;

    transition: all $transition-time $transition-function;

    svg {
        height: $logo-size;
        width: $logo-size;
    }

    .svg-label {
        margin-left: $margin;
    }
}
</style>
