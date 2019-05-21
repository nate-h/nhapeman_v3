<template>
    <project-template class="project-vue">
        <template v-slot:summaryImage>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:summaryText>
            <p>
                I wrote this website you're viewing now using Vue and Sass as a
                learning experience. The biggest thing I wanted to learn was Vue
                since I came from an AngularJS background. For this reason, I
                wrote most of it from scratch so I could learn the ins and outs
                of Vue.
                <a href="https://github.com/nate-h/nhapeman.com_v3">
                    Check out the code here!
                </a>
                In addition to wanting to learn Vue, I also wanted to take the
                time and learn some of things I didn't have time to learn on the
                job. As a software developer, you constantly have to fight
                deadlines and sadly this means you have to occasionally put
                aside learning something to meet a deadline. The last thing I
                hoped to learn while developing this website was new patterns
                from using the
                <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
                    >DRY principle</a
                >
                wherever possible. So while developing this website, I rewrote
                many things as I learned cooler things Vue had to offer.
            </p>
        </template>

        <template v-slot:demo>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:demoDetails>
            <p>
                My experience with Vue so far has been completely positive,
                unlike my experience with AngularJS which was annoying at times.
                I suspected that the documentation for AngularJS was bad but it
                wasn't until I dove into Vue that I realized what I was missing.
                The best way to read AngularJS documentation is to ignore it
                completly and use stackoverflow. I found it way too complex for
                describing simple concepts. It also uses other AngularJS terms
                to define something. So You almost need an understanding of
                everything else to understand one thing.
            </p>
            <p>
                Vue on the other hand was much easier to learn. I'll admit that
                part of the reason why it was easier to learn is that so many
                things were borrowed from AngularJS. So naturally it wasn't too
                hard to translate a lot of my knowledge over from AngularJS. I
                think if I didn't have a background in AngularJS or any web
                framework for that matter, Vue would have been easy to learn
                because it has great simplictic documentation. Working with it
                so far, I find that it has a good balance of letting the
                developer do what they want while creating a structure that
                promotes some order to create cleaner code.
            </p>
            <p>
                An example of this are the properties you can define when
                creating a component. These properties like watch, props,
                methods and data provide a formal place to group similar items.
                This differs from AngularJS because
            </p>
            <p>
                Another great thing Vue provides is
                <a
                    href="https://vuejs.org/v2/guide/single-file-components.html"
                >
                    single file components</a
                >. Single file components are components fully defined in one
                file. You stuff the css, javascript and html in one file as
                opposed to 3 seperate files. The buety of this feature is that
                developers are more incentivised to break up their code into
                smaller pieces. I find it annoying when you want to create a
                small component but need to create 3 files for your css/js/html
                that have 30 lines each. Being able to throw all 3 snippets into
                one file makes it so: you're not overwhlemed by number of files,
                you can iterate faster since all the code is in one file, delete
                the component easier.
            </p>
            <p>
                The last thing I like about vue is how easy it is to dive into
                it. It takes 4 lines to get a local website up and running.
                <snippet lang="bash">{{ VueSiteSetup }}</snippet>

                syntax similar to angular, great documentation and mostly
                written by one dude so it doesn't suffer from having
                <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8"
                    >too many cooks</a
                >. The best part is that it's been really easy to learn! One of
                the cool things about Vue is that it comes with batteries
                included. Getting a website up and running locally is as easy
                as:
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
            title: "My thoughts on learning Vue",
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
