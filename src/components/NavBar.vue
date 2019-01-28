<template>
  <header class="nav-bar l-to-r">
    <!-- Logo -->
    <div class="logo-blob">
      <img src="~img/logo.png" class="logo">
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
        <div class="dropdown" v-if="link.has_dropdown">
          <div class="label">
            <router-link class="link" :to="link.path">
              <span>{{link.name}}</span>
            </router-link>
            <arrow-svg/>
          </div>

          <div class="list">
            <span>test 1</span>
            <span>test 2</span>
            <span>test 12345678910</span>
          </div>
        </div>

        <!-- Routes without dropsdown -->
        <router-link class="link" :to="link.path" v-if="!link.has_dropdown">
          <span>{{link.name}}</span>
        </router-link>
      </div>

      <!-- Iterate on child paths -->
      <!-- <div v-for="childLink in link.children" :key="childLink.name">
            <router-link :to="link.path + '/' + childLink.path">
                <button class="link-buttons">
                    <span>{{childLink.name}}</span>
                </button>
            </router-link>
      </div>-->
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
        linkClick(link) {
            console.log("link", link);
        }
    },
    watch: {},
    created() {
        this.routes = this.$router.options.routes;
        console.log("this.routes", this.routes);
    },
    components: {
        arrowSvg
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dropdown {
    vertical-align: middle;
    position: relative;

    svg {
        @extend %slow-fx;

        fill: $light1;
        height: $logo-small;
        transform: rotate(180deg);
        width: $logo-small;
    }

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
        z-index: 1;

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

.nav-bar {
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
        margin-left: auto;

        @extend %l-to-r, .ca;

        a.link {
            font-size: 2rem;
            margin: 0;
            padding: $padding-small;

            &.router-link-exact-active {
                @extend %active-effect;
                color: $light1;
            }

            &:hover:not(.router-link-exact-active) {
                @extend %hover-effect, %pop;
            }
        }
    }
}
</style>
