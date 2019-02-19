<template>
    <div class="home">
        <about-me-container></about-me-container>

        <header-container header="Job History" class="job-components">
            <!-- Inject Job Components -->
            <job-container
                company="Applied Invention"
                :img="require('img/ai.png')"
                link="https://www.appliedinvention.com/"
                years="June 2014-Present"
                short-description="Software Engineer"
            >
                <p>
                    This is my current full time job and an amazing company! At
                    Applied Invention, we work on creating innovative solutions
                    for leading companies and entrepreneurs. All of the projects
                    I've worked on have been extremely interesting and exciting
                    to work on. The longest project I worked on was our in-house
                    geo-spacial game engine that was built for simulations. The
                    engine was written in c++ and used panda3d, an open source
                    3D game engine. Currently, I am working as a front-end
                    engineer on an in-house website used to collect training
                    data for machine learning algorithms.
                </p>
            </job-container>
            <job-container
                company="FrackOptima"
                :img="require('img/frackoptima.png')"
                link="http://frackoptima.com/"
                years="May 2016-Present"
                short-description="Software Engineer"
            >
                <p>
                    I worked part-time at FrackOptima as a software engineer
                    while working full-time for Applied Invention. FrackOptima
                    is a hydraulic fracturing company that specializes in
                    software and services for optimal hydraulic fracturing
                    treatments. There's several systems which make this all
                    possible. Most of my work has been on the company website
                    and the fracking simulator.
                </p>
            </job-container>
        </header-container>
    </div>
</template>

<script>
import JobContainer from "@/components/Job.vue";
import AboutMeContainer from "@/components/AboutMe.vue";

export default {
    name: "HomeContainer",
    data() {
        return {
            links: [
                { name: "About Me", link: "aboutme" },
                { name: "Job History", link: "jobhistory" },
                { name: "Projects", link: "projects" }
            ]
        };
    },
    components: {
        "job-container": JobContainer,
        "about-me-container": AboutMeContainer
    },
    methods: {},
    created() {
        //this.$store.commit("setLinks", this.links);
    }
};
</script>

<style lang="scss">
.home {
    padding: $padding-large;
    @extend %t-to-b, .ca;

    & > *:not(:last-child) {
        margin-bottom: $margin-large;
    }
}
</style>
