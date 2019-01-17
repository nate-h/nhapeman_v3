<template>
  <header class="nav-bar l-to-r">

      <!-- Logo -->
      <div class="logo-blob">
          <img src="~img/logo.png" class="logo">
          <div>
              <a href="#">
                  <h1>Nathanial Hapeman</h1>
              </a>
              <h2>Software Engineer</h2>
          </div>
      </div>

      <!-- Links -->
      <div class="link-holder l-to-r">
        <router-link v-for="link in routes"
                    :key="link.name"
                    :to="link.path" class="link"
        >
          <span>{{link.name}}</span>
        </router-link>

        <!-- Iterate on child paths -->
        <!-- <div v-for="childLink in link.children" :key="childLink.name">
            <router-link :to="link.path + '/' + childLink.path">
                <button class="link-buttons">
                    <span>{{childLink.name}}</span>
                </button>
            </router-link>
        </div> -->
      </div>
  </header>
</template>


<script>
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
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
    }

    .link-holder {
        margin-left: auto;

        @extend %l-to-r, .ca;

        a.link {
            color: $light1;
            font-size: 2rem;
            margin: 0;
            padding: $padding-small;

            &.router-link-exact-active {
                @extend %active-effect;
            }

            &:hover {
                @extend %hover-effect;
            }
        }
    }
}
</style>
