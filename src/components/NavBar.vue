<template>
    <header class="nav-bar">
        <!-- Logo -->
        <div class="logo-blob">
            <img src="~img/logo.png" class="logo" />
            <div class="me t-to-b lt">
                <router-link to="/">
                    <h1>Nathanial Hapeman</h1>
                    <h2>Software Engineer</h2>
                </router-link>
            </div>
        </div>

        <!-- Links -->
        <div class="link-holder l-to-r">
            <div v-for="link in routes" :key="link.name">
                <!-- Routes with dropsdown -->
                <div class="dropdown" v-if="hasChildren(link)" onclick="">
                    <div class="label">
                        <router-link class="router-link" :to="link.path">
                            <span>{{ link.name }}</span>
                            <arrow-svg />
                        </router-link>
                    </div>

                    <!-- Drop down list of children. -->
                    <div class="list">
                        <router-link
                            class="router-link"
                            v-for="child in link['children']"
                            :to="link.path + '/' + child.path"
                            :key="child.name"
                        >
                            <span>{{ child.name }}</span>
                        </router-link>
                    </div>
                </div>

                <!-- Routes without dropsdown -->
                <router-link
                    class="router-link"
                    :to="link.path"
                    v-if="!hasChildren(link)"
                >
                    <span>{{ link.name }}</span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
import arrowSvg from "img/arrow.svg";
export default {
    name: "NavBar",
    data() {
        return {
            routes: {}
        };
    },
    props: [],
    methods: {
        hasChildren(link) {
            return "children" in link && link.children.length > 0;
        }
    },
    watch: {},
    created() {
        // Setup routes and remove children that aren't listed.
        this.routes = this.$router.options.routes;
        for (const route of this.routes) {
            if (Array.isArray(route.children)) {
                route.children = route.children.filter(
                    route => route.listed === true
                );
            }
        }
    },
    components: {
        arrowSvg
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav-bar {
    @include holder("r-to-r");
    background-color: $dark0;
    padding: $padding;

    img {
        height: 4.5rem;
        margin: 0;
        padding: 0;
        margin-right: $margin;
        width: 4.5rem;

        -webkit-transition: -webkit-transform 0.8s ease-in-out;
        transition: transform 0.8s ease-in-out;
    }

    .logo-blob {
        @extend %l-to-r, .lt;

        .logo:hover {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }

        .me {
            a {
                @extend %pop;
            }
        }
    }

    .link-holder {
        @extend %l-to-r, .ca;

        margin-left: auto;
    }
}

.dropdown {
    vertical-align: middle;
    position: relative;

    .label {
        @extend %l-to-r, .ca;
    }

    .list {
        @extend %t-to-b;
        color: white;
        display: none;
        background-color: $dark1;
        flex-wrap: nowrap;
        font-size: 2rem;
        padding: $padding;
        position: absolute;
        right: 0;
        white-space: nowrap;
        z-index: 2;

        & > *:not(:last-child) {
            margin-bottom: $margin;
        }
    }

    &:hover {
        background-color: $dark1;
        .list {
            display: flex;
        }

        .label svg {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
    }
}

@media screen and (max-width: $break-large) {
    .nav-bar {
        @include holder("t-to-b", "lt", "ca");

        .link-holder {
            margin-left: 0;
        }
    }
}
</style>
