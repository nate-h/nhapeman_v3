<template>
    <div class="root-div">

        <div class="parallax-hero">
            <div class="parallax-hero-text">
                <h1>Hi there! I'm Nathanial Hapeman.</h1>
                <h2>And I love to code!</h2>
            </div>
        </div>

        <div class="home-container-body">
            <h1 id="aboutme">About Me</h1>
            <about-me-container></about-me-container>

            <!-- Inject Job Components -->
            <h1 id="jobhistory">Job History</h1>

            <job-container
              company='Applied Invention'
              :img="require('img/ai.png')"
              link='https://www.appliedinvention.com/'
              years='June 2014-Present'
              short-description='Software Engineer'>

                This is my current full time job and an amazing company! At Applied Invention, we work on creating innovative solutions for leading companies and entrepreneurs. All of the projects I've worked on have been extremely interesting and exciting to work on. The longest project I worked on was our in-house geo-spacial game engine that was built for simulations. The engine was written in c++ and used panda3d, an open source 3D game engine. Currently, I am working as a front-end engineer on an in-house website used to collect training data for machine learning algorithms.
            </job-container>
            <job-container
              company='FrackOptima'
              :img="require('img/frackoptima.png')"
              link='http://frackoptima.com/'
              years='May 2016-Present'
              short-description='Software Engineer'>
                I worked part-time at FrackOptima as a software engineer while working full-time for Applied Invention. FrackOptima is a hydraulic fracturing company that specializes in software and services for optimal hydraulic fracturing treatments. There's several systems which make this all possible. Most of my work has been on the company website and the fracking simulator.
            </job-container>
        </div>

    </div>
</template>

<script>

import JobContainer from './JobContainer.vue';
import AboutMeContainer from './AboutMeContainer.vue';

export default {
    name: 'HomeContainer',
    data () {
        return {
            links: [
                {'name': 'About Me', 'link': 'aboutme'},
                {'name': 'Job History', 'link': 'jobhistory'},
                {'name': 'Projects', 'link': 'projects'}
            ]
        };
    },
    components: {
        'job-container': JobContainer,
        'about-me-container': AboutMeContainer
    },
    methods: {

    },
    created () {
        this.$store.commit('setLinks', this.links);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import "~scss/main.scss";

    .root-div {

        width: 100%;

        .home-container-body {

            align-items: center;
            background-color: white;
            display: flex;
            flex-flow: column;
            margin-top: 250px;
            vertical-align: middle;
            width: 100%;

            & > * {
                flex: 1 0 auto;

                &:not(.parallax-hero) {
                    max-width: map-get($breakpoints, large);
                }
            }

            & > h1 {
                background-color: $light1;
                padding: $padding-large;
                z-index: 999;
            }
        }
    }

    .parallax-hero {

        background-image: url('~img/forest.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        height: 250px;
        justify-content: center;
        position: fixed;
        text-align: center;
        -webkit-transform: translateZ(0);
        width: calc(100% - 220px);
        z-index: -1;

        .parallax-hero-text {
            color: white;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
            font-family: "Montserrat", sans-serif;
            background-color: $bg-shadow;
        }
    }

    h1 + div {
        border-top: solid 1px #e4e6e8;
        padding-top: 30px !important;
        margin-top: -30px !important;
    }

    .horizontal {

        display: flex;
        flex-direction: row;
        margin: 0;

        div:not(:first-child) {
            margin-left: $margin-small;
        }

        div:not(:last-child) {
            margin-right: $margin-small;
        }

        & > * {
            flex: 1;
        }

    }

</style>
