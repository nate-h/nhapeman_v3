<template>
  <header class="root-div t-to-b">

      <div class="logo-blob">
          <img src="~img/logo.png" class="logo">
          <div class="vertical-rows">
              <a href="#">
                  <h1>Nathanial Hapeman</h1>
              </a>
              <h2>Software Engineer</h2>
          </div>
      </div>

      <div class="link-holder">
          <div v-for="link in routes" :key="link.name">
              <router-link :to="link.path">
                  <button class="link-buttons" v-bind:class="{active: isActive(link)}">
                      <span>{{link.name}}</span>
                  </button>
              </router-link>

              <!-- Iterate on child paths -->
              <div v-for="childLink in link.children" :key="childLink.name">
                  <router-link :to="link.path + '/' + childLink.path">
                      <button class="link-buttons" v-bind:class="{active: isActive(childLink)}">
                          <span>{{childLink.name}}</span>
                      </button>
                  </router-link>
              </div>
          </div>
      </div>

      <div class="social-links">
          <svg-link src="~img/linkedin.svg" link="https://www.linkedin.com/in/nhapeman/">
              LinkedIn
          </svg-link>
          <svg-link src="~img/github.svg" link="https://github.com/nate-h">
              Github
          </svg-link>
      </div>
  </header>
</template>


<script>
export default {
    name: "NavBarContainer",
    data() {
        return {
            routes: {}
        };
    },
    props: [],
    methods: {
        linkClick(link) {
            console.log("link", link);
        },
        isActive(link) {
            return link.name === this.$route.name;
        }
    },
    watch: {},
    created() {
        this.routes = this.$router.options.routes;
        console.log("this.routes", this.routes);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.root-div {
    background-color: $dark0;
    flex-shrink: 0;
    padding: $padding-large;
    width: 220px;

    a {
        @extend %v-center;
    }

    img {
        height: 6rem;
        margin: 0;
        padding: 0;
        margin-right: $margin;
        width: 6rem;

        -webkit-transition: -webkit-transform 0.8s ease-in-out;
        transition: transform 0.8s ease-in-out;
    }

    span {
        color: $light1;
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    .logo-blob {
        @extend %h-center;

        .logo:hover {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .link-holder {
        margin-top: $margin-xxx-large;

        .link-buttons {
            @extend %button;

            background-color: transparent;
            margin: 0;

            &.active span {
                color: $color2;
                -webkit-transform: scale(1.05);
                -ms-transform: scale(1.05);
                transform: scale(1.05);
                transition: all $transition-time $transition-function;
            }

            span {
                color: $light1;

                &:hover {
                    color: $color1;
                    -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                    transition: all $transition-time $transition-function;
                }

                &:active {
                    color: $color2;
                    -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                    transition: all $transition-time $transition-function;
                }
            }
        }
    }

    .social-links {
        @extend %h-center;

        margin-top: auto;

        & > * {
            margin: 4px;
        }

        .svg-link {
            fill: $light1;
            color: $light1;

            &:hover {
                fill: $color1;
                color: $color1;
            }

            &:active {
                fill: $color2;
                color: $color2;
            }
        }
    }
}
</style>
