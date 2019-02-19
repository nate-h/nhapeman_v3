<template>
    <div class="project-demo l-to-r lt">
        <!-- Left -->
        <div class="leftside">
            <slot name="demo"></slot>
        </div>

        <!-- Right -->
        <div class="rightside">
            <div class="header">
                <h1 class="name">{{ name }}</h1>
            </div>

            <slot name="text"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["name", "img"]
};
</script>

<style lang="scss">
$img-side: 200px;

.project-demo {
    background-color: $light1;
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

        .header {
            @extend %l-to-r, .ca;
            margin-bottom: $margin-small;
        }
        .name {
            display: inline-block;
        }
    }

    img:first-of-type {
        height: 200px;
        width: 200px;
    }
}
</style>
