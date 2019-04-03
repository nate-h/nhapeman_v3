// yarn add prismjs
import "prismjs";
import "prismjs/themes/prism.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SVGLink from "@/components/SVGLink.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
import ProjectTemplate from "@/components/ProjectTemplate.vue";
import Snippet from "@/components/Snippet.vue";

Vue.component("svg-link", SVGLink);
Vue.component("header-container", HeaderContainer);
Vue.component("project-template", ProjectTemplate);
Vue.component("snippet", Snippet);

Vue.config.productionTip = false;

new Vue({
    router,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");
