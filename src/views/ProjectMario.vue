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
                Being a 90's kid, I played my fair share of Mario based games.
                The next logical step was to create my own version of my beloved
                childhood game! So being fairly brand new to programming, I
                thought it was a good idea to recreate some of the basic
                functionality of Super Mario Bros. The hardest part of this for
                sure was trying to acquire all of the art for the game. So much
                so that I started borrowing assets from other games. It was an
                amazing learning experience to teach me c++ and polymorphism. It
                was also a good introduction to data structures, memory
                management, and threading. Click View Gameplay to see the
                result!
            </p>
        </project-summary>

        <project-demo v-if="$route.name === name" :name="name">
            <template v-slot:demo>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/EMslyjWIPGo"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                ></iframe>
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/1c4erMvMnVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
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
