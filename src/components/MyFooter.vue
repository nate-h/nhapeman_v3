<template>
  <footer class="my-footer l-to-r">

      <div class="conact">
          <div class="vertical-rows">
              <a href="mailto:nhapeman@gmail.com?Subject=Hey%20Nate" target="_top">
                  <h1>Contact Info</h1>
              </a>
              <a href="mailto:nhapeman@gmail.com?Subject=Hey%20Nate" target="_top">
                  <h2>nhapeman@gmail.com</h2>
              </a>
          </div>
      </div>

      <div class="social-links">
          <test class="svg-link"/>
          <svg-link src="~img/linkedin.svg" link="https://www.linkedin.com/in/nhapeman/">
              LinkedIn
          </svg-link>
          <svg-link src="~img/github.svg" link="https://github.com/nate-h">
              Github
          </svg-link>
      </div>
  </footer>
</template>


<script>
import test from "img/linkedin.svg";

export default {
    name: "MyFooter",
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
    },
    components: {
        test
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.my-footer {
    background-color: $dark0;
    padding: $padding;

    a {
        @extend %v-center;
    }

    .conact {
        @extend %v-center;

        .logo:hover {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .social-links {
        margin-left: auto;
        @extend %v-center;

        & > * {
            margin: 4px;
        }

        .svg-link {
            fill: $light1;
            color: $light1;
            height: 10px;
            width: 10px;

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
