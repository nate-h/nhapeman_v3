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
                job. Things like how to make a website look nicer or the proper
                way to organize and structure my sass code. Most of the
                professional work I've done has been in R&D so in many regards,
                I have a lot of catching up to do when it comes to general web
                developnent. Also, when times get tough, I try to only learn
                what's necessary and cosmetics sadly aren't on that list. The
                last thing I hoped to learn while developing this website was
                new patterns from using the
                <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
                    >DRY principle</a
                >
                wherever possible. This meant I overengineered many things but
                don't care since half the fun of being a software developer is
                trying to find the perfect way to write something. Something I
                strongly believe is that when you go above and beyond on one
                thing, you learn many things you can apply everywhere else. Keep
                reading to hear my experience with Vue.
            </p>
        </template>

        <template v-slot:demo>
            <vuelogo></vuelogo>
        </template>

        <template v-slot:demoDetails>
            <p>
                My experience with Vue so far has been completely positive
                whereas my experience with AngularJS which was mostly positive
                except for learning it. It's nice to use after you've learned
                the basics but the documentation is horrific. The problem with
                it is that it serves better as a refresher than a tool for
                learning. Often did I read the documentation for AngularJS and
                leave with more questions. It had a habit of using other
                concepts from Angular to explain Angular. I suspected that the
                documentation for AngularJS was the greatest but it wasn't until
                I dove into Vue that I realized how overly complicated AngularJS
                was. With that being said, I can acknowledge that my background
                in AngularJS definetely helped me learn Vue faster since it
                borrows many things from AngularJS.
            </p>
            <p>
                So one might ask, why Vue? Well the obvious one to learn was
                React but to be honest, my thinking was that Vue showed a lot of
                promise and I'm hoping that it stays relevant longer than
                Angular and React. But you never know with how volatile software
                can be. My initial impression of Vue was that it was really easy
                to learn and was extremely powerful out of the box. The cool
                thing about it coming from AngularJS was that all of the common
                directives like ng-if, ng-repeat, ng-show had Vue analogs. For
                many of those cases, just replacing the ng with v was enough!
                After diving into it a little bit, I got hooked! My favorite
                features are: single file components, syntax similar to angular,
                great documentation and mostly written by one dude so it doesn't
                suffer from having
                <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8"
                    >too many cooks</a
                >. The best part is that it's been really easy to learn! One of
                the cool things about Vue is that it comes with batteries
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
