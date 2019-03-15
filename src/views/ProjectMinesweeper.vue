<template>
    <div>
        <project-summary
            v-if="showSummary()"
            button-text="Play It"
            :link="path"
            :name="name"
        >
            <template v-slot:img>
                <img src="~img/minesweeper.png" />
            </template>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut consectetur quia, recusandae quod, debitis reprehenderit
                dolorum dolores inventore iusto ad blanditiis dolorem, quo
                aliquid sit veniam? Praesentium, facere voluptatem.
            </p>
        </project-summary>

        <project-demo v-if="showDemo()">
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
            <template v-slot:text>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias aut consectetur quia, recusandae quod, debitis
                    reprehenderit dolorum dolores inventore iusto ad blanditiis
                    dolorem, quo aliquid sit veniam? Praesentium, facere
                    voluptatem.
                </p>
            </template>
        </project-demo>
    </div>
</template>

<script>
import ProjectBase from "@/mixins/ProjectBase.vue";
export default {
    name: "ProjectMinesweeper",
    path: "minesweeper",
    mixins: [ProjectBase],
    data() {
        return {
            title: "Minesweeper implemented in JS"
        };
    }
};
</script>

<style lang="scss"></style>
