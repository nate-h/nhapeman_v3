<template>
    <project-template>
        <template v-slot:summaryImage>
            <img src="~img/pacman.png" />
        </template>

        <template v-slot:summaryText>
            <p>
                I had some time to kill before I got my first job as a software
                developer. Decided to remake Pacman in Javascript for fun. As a
                side effect, I improved my skills as a game developer and
                polished my knowledge of data structures and algorithms.
            </p>
        </template>

        <template v-slot:demo>
            <iframe
                src="https://nate-h.github.io/pacman_js/"
                frameborder="0"
                allow="autoplay; encrypted-media"
                scrolling="no"
                allowfullscreen
                style="width: 600px; height: 430px"
            ></iframe>
        </template>

        <template v-slot:demoDetails>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut consectetur quia, recusandae quod, debitis reprehenderit
                dolorum dolores inventore iusto ad blanditiis dolorem, quo
                aliquid sit veniam? Praesentium, facere voluptatem.
            </p>
        </template>
    </project-template>
</template>

<script>
export default {
    name: "PixelChaser",
    path: "pixelchaser",
    listed: false,
    data() {
        return {
            title: "Pixel Chaser",
            description: "Javascript",
            moreInfoButtonText: "Demo",
        };
    },
};
</script>

<style lang="scss"></style>
