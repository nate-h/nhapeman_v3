import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SVGLink from "@/components/SVGLink.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
import ProjectSummary from "@/components/ProjectSummary.vue";
import ProjectDemo from "@/components/ProjectDemo.vue";

Vue.component("svg-link", SVGLink);
Vue.component("header-container", HeaderContainer);
Vue.component("project-summary", ProjectSummary);
Vue.component("project-demo", ProjectDemo);

Vue.config.productionTip = false;

new Vue({
    router,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");
