<template>
    <div>
        <project-summary
            v-if="$route.name !== name"
            button-text="Play It"
            :link="link"
            :name="name"
        >
            <template v-slot:img>
                <img src="~img/pacman.png" />
            </template>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut consectetur quia, recusandae quod, debitis reprehenderit
                dolorum dolores inventore iusto ad blanditiis dolorem, quo
                aliquid sit veniam? Praesentium, facere voluptatem.
            </p>
        </project-summary>

        <project-demo v-if="$route.name === name" :name="name">
            <template v-slot:demo>
                <iframe
                    src="https://nate-h.github.io/pacman_js/"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    scrolling="no"
                    allowfullscreen
                    style="width:600px;height:430px;"
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
export default {
    name: "ProjectPacman",
    data() {
        return {
            name: "Pacman",
            link: "pacman"
        };
    },
    methods: {}
};
</script>

<style lang="scss"></style>
