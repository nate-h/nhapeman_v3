<template>
    <div>
        <project-summary
            v-if="$route.name !== name"
            button-text="View Gameplay"
            :link="link"
            :name="name"
        >
            <template v-slot:img>
                <img src="~img/mario.png" />
            </template>
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
                <div style="position:relative;padding-top:56.25%;">
                    <iframe
                        src="https://www.youtube.com/embed/EMslyjWIPGo"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    ></iframe>
                </div>
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
