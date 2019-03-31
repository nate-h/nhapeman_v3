<template>
    <div class="project-template">
        <!-- -------------------------------------------------------------- -->
        <div class="summary-template l-to-r lt" v-if="showSummary()">
            <!-- Left -->
            <div class="leftside">
                <router-link :to="'/projects/' + path" class="link" v-if="path">
                    <slot name="summaryImage" class="thumbnail"></slot>
                </router-link>
                <slot name="summaryImage" class="thumbnail" v-if="!path"></slot>
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
                    <slot name="summaryText"></slot>
                </p>
            </div>
        </div>

        <!-- -------------------------------------------------------------- -->

        <div class="demo-template t-to-b" v-if="showDemo()">
            <!-- Header -->
            <div class="header">
                <h1 class="title">{{ title }}</h1>
                <span class="description">{{ description }}</span>
            </div>

            <!-- Demo -->
            <div class="demo">
                <slot name="demo"></slot>
            </div>

            <!-- Description -->
            <div class="text">
                <slot name="summaryText"></slot>
                <slot name="demoDetails"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectTemplate",
    methods: {
        showSummary: function() {
            return this.$parent.$route.name !== this.name;
        },
        showDemo: function() {
            return this.$parent.$route.name === this.name;
        }
    },
    computed: {
        path: function() {
            return this.$parent.$options.path;
        },
        name: function() {
            return this.$parent.$options.name;
        },
        title: function() {
            return this.$parent.title;
        },
        description: function() {
            return this.$parent.description;
        },
        buttonText: function() {
            return this.$parent.buttonText;
        }
    },
    created: function() {
        // "name", "path",
        let neededOverrides = ["title", "description", "buttonText"];
        for (let prop of neededOverrides) {
            if (
                this.$parent[prop] === null ||
                this.$parent[prop] === undefined
            ) {
                console.error(`Need to override ${prop}`);
            }
        }
    }
};
</script>

<style lang="scss">
$img-side: 200px;

.project-template {
    background-color: $light1;
    max-width: map-get($breakpoints, large);
    padding: $padding-large;
    width: 100%;

    // Rules for shared header.
    .header {
        .title {
            display: inline-block;
        }

        .description {
            @extend %default-size;
            color: $dark3;
            font-weight: bold;
            margin-left: $margin;
        }
    }

    .demo-template {
        .header {
            margin-bottom: $margin-large;
        }

        .text {
            padding: $padding-x-large;
            text-align: left;
        }
    }

    .summary-template {
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

                .link {
                    margin-left: auto;
                    @extend %router-link;
                }
            }
        }
    }
}
</style>
