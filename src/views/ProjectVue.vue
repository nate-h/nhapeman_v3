<template>
    <project-template class="project-vue">
        <template v-slot:summaryImage>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:summaryText>
            <p>
                Having worked with AngularJS professionally, I wanted to take a
                stab at learning another Javascript framework. The obvious one
                to learn was React but my curiosity for Vue steered me in it's
                direction. After diving into it a little bit, I fell in love! I
                mean what's not to like? Single file components, borrowed
                features from AngularJS, great documentation and mostly written
                by one dude so it doesn't suffer from having
                <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8"
                    >too many cooks</a
                >. The best part is that it's been really easy to learn!
            </p>
        </template>

        <template v-slot:demo>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:demoDetails>
            <p>
                One of the cool things about Vue is that it comes with batteries
                included. Getting a website up and running locally is as easy
                as:
                <snippet lang="js">const test = a;</snippet>
            </p>
        </template>
    </project-template>
</template>

<script>
import vuelogo from "img/vuelogo.svg";
export default {
    name: "Vue",
    path: "vue",
    listed: true,
    data() {
        return {
            title: "Learning Vue",
            description: "Vue, Sass",
            buttonText: "Read More"
        };
    },
    components: {
        vuelogo
    }
};
</script>

<style lang="scss">
.project-vue {
    $vue-logo-side: 300px;
    .demo {
        svg {
            height: $vue-logo-side;
        }
    }
}
</style>
