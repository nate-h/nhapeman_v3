<template>
    <div>
        <project-summary
            v-if="$route.name !== name"
            :img="require('img/mario.png')"
            button-text="View Gameplay"
            :link="link"
            :name="name"
        >
            <p>
                I worked part-time at FrackOptima as a software engineer while
                working full-time for Applied Invention. FrackOptima is a
                hydraulic fracturing company that specializes in software and
                services for optimal hydraulic fracturing treatments. There's
                several systems which make this all possible. Most of my work
                has been on the company website and the fracking simulator.
            </p>
        </project-summary>

        <project-demo v-if="$route.name === name" :name="name">
            <template v-slot:demo>
                <img src="~img/mario.png" />
            </template>
            <template v-slot:text>
                <span>test2</span>
            </template>
        </project-demo>
    </div>
</template>

<script>
export default {
    name: "ProjectMario",
    data() {
        return {
            name: "Mario",
            link: "mario"
        };
    },
    methods: {}
};
</script>

<style lang="scss"></style>
