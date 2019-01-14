import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SVGLink from "@/components/SVGLink.vue";

Vue.component("svg-link", SVGLink);

Vue.config.productionTip = false;

new Vue({
    router,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");
