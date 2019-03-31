<template>
    <project-template>
        <template v-slot:summaryImage>
            <img src="~img/minesweeper.png" />
        </template>

        <template v-slot:summaryText>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut consectetur quia, recusandae quod, debitis reprehenderit
                dolorum dolores inventore iusto ad blanditiis dolorem, quo
                aliquid sit veniam? Praesentium, facere voluptatem.
            </p>
        </template>

        <template v-slot:demo>
            <iframe
                src="https://nate-h.github.io/minesweeper_js/"
                frameborder="0"
                allow="autoplay; encrypted-media"
                scrolling="no"
                allowfullscreen
                style="width:400px;height:370px;"
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
    name: "Minesweeper",
    path: "minesweeper",
    data() {
        return {
            title: "Minesweeper Remake",
            description: "Javascript",
            buttonText: "Play"
        };
    }
};
</script>

<style lang="scss"></style>
