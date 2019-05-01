<template>
    <project-template class="project-vue">
        <template v-slot:summaryImage>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:summaryText>
            <p>
                I wrote this website you're viewing now using Vue and Sass
                as a learning experience. The biggest thing I wanted to learn
                was Vue since I came from an AngularJS background.
                For this reason, I wrote most of it from scratch so I could
                learn the ins and outs of Vue.
                <a href="https://github.com/nate-h/nhapeman.com_v3">
                    Check out the code here!
                </a>
                In addition to wanting to learn Vue, I also wanted to take the time
                and learn some of things I didn't have time to learn on the job.
                As a software developer, you constantly have to fight deadlines
                and sadly this means you have to occasionally put aside learning something to meet a deadline.
                The last thing I hoped to learn while developing this website was new
                patterns from using the
                <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY principle</a>
                wherever possible. This meant I overengineered many things but
                don't care since half the fun of being a software developer is trying to find the perfect way to write something. Something I strongly believe is that when you go above and beyond on one thing, you learn many things you can apply everywhere else.
            </p>
        </template>

        <template v-slot:demo>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:demoDetails>
            <p>
                My experience with Vue so far has been completely positive.
                Unlike my experience with AngularJS which was mostly smiles but plently of frowns
                when considering the slow time I had learning it relative to my experience with Vue.

                I suspected that the documentation for AngularJS was awful but it wasn't
                until I dove into Vue that I learned the degree of which AngularJS documentation sucked.
                The best way to read AngularJS documentation is to ignore it and use stackoverflow.
                It's way too complex for describing simple things.

                The obvious one ...

                to learn was React but my curiosity for Vue steered me in it's
                direction. After diving into it a little bit, I got hooked!
                My favorite features are: single file components,
                syntax similar to angular, great documentation and mostly written
                by one dude so it doesn't suffer from having
                <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8"
                    >too many cooks</a
                >. The best part is that it's been really easy to learn!

                One of the cool things about Vue is that it comes with batteries
                included. Getting a website up and running locally is as easy
                as:
                <snippet lang="bash">{{ VueSiteSetup }}</snippet>
            </p>
        </template>
    </project-template>
</template>

<script>
import vuelogo from "img/vuelogo.svg";
import VueSiteSetup from "raw-loader!@/assets/text/VueSiteSetup.txt";
export default {
    name: "Vue",
    path: "vue",
    listed: true,
    data() {
        return {
            title: "Learning Vue",
            description: "Vue, Sass",
            buttonText: "Read More",
            VueSiteSetup: VueSiteSetup
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
