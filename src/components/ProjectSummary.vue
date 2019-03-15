<template>
    <div class="project-summary l-to-r lt">
        <!-- Left -->
        <div class="leftside">
            <router-link :to="'/projects/' + path" class="link" v-if="path">
                <slot name="img" class="thumbnail"></slot>
            </router-link>
            <slot name="img" class="thumbnail" v-if="!path"></slot>
        </div>

        <!-- Right -->
        <div class="rightside">
            <div class="header">
                <h1 class="title">{{ title }}</h1>
                <span class="description">{{ description }}</span>
                <router-link :to="'/projects/' + path" class="link">
                    <span>{{ buttonText }}</span>
                </router-link>
            </div>
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: this.$parent.title,
            buttonText: this.$parent.buttonText,
            description: this.$parent.description,
            path: this.$parent.path
        };
    }
};
</script>

<style lang="scss">
$img-side: 200px;

.project-summary {
    background-color: $light1;
    max-width: map-get($breakpoints, large);
    padding: $padding-large;
    width: 100%;

    .leftside {
        @extend %l-to-r, .ca;
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: $padding-large;
        width: $img-side;

        img {
            width: $img-side;
        }

        svg {
            width: $img-side;
        }
    }

    .rightside {
        flex-grow: 1;

        .header {
            @extend %l-to-r, .ca;
            margin-bottom: $margin-small;

            .title {
                display: inline-block;
            }

            .description {
                @extend %default-size;
                color: $dark3;
                font-weight: bold;
                margin-left: $margin;
            }

            .link {
                margin-left: auto;
                @extend %router-link;
            }
        }
    }
}
</style>
