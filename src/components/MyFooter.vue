<template>
    <footer class="my-footer">
        <div class="contact">
            <a
                href="mailto:nhapeman@gmail.com?Subject=Hey%20Nate"
                target="_top"
            >
                <h1>Contact Info</h1>
                <h2>nhapeman@gmail.com</h2>
            </a>
        </div>

        <div class="social-links">
            <svg-link link="https://www.linkedin.com/in/nhapeman/">
                <linkedin-svg />
            </svg-link>
            <svg-link link="https://github.com/nate-h">
                <github-svg />
            </svg-link>
        </div>
    </footer>
</template>

<script>
import linkedinSvg from "img/linkedin.svg";
import githubSvg from "img/github.svg";

export default {
    name: "MyFooter",
    components: {
        linkedinSvg,
        githubSvg,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.my-footer {
    background-color: $dark0;
    padding: $padding;
    @extend %l-to-r, .lt;

    .contact {
        @extend %t-to-b, .lt, %pop;
    }

    .social-links {
        margin-left: auto;
        @extend %l-to-r;

        & > * {
            margin: 4px;
        }

        .svg-link {
            fill: $light1;
            color: $light1;

            &:hover {
                fill: $color1;
                color: $color1;
            }

            &:active {
                fill: $color2;
                color: $color2;
            }
        }
    }
}
</style>
