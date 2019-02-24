<template>
    <div>
        <project-summary
            v-if="$route.name !== name"
            :img="require('img/recordName.png')"
            button-text="View Demo"
            :link="link"
            :name="name"
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Alias aut consectetur quia, recusandae quod, debitis
                reprehenderit dolorum dolores inventore iusto ad blanditiis
                dolorem, quo aliquid sit veniam? Praesentium, facere
                voluptatem.
            </p>
        </project-summary>

        <project-demo v-if="$route.name === name" :name="name">
            <template v-slot:demo>
                <div style="position:relative;padding-top:56.25%;">
                    <iframe
                        src="https://www.youtube.com/embed/1c4erMvMnVQ"
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
    name: "ProjectMyTunes",
    data() {
        return {
            name: "MyTunes",
            link: "mytunes"
        };
    },
    methods: {}
};
</script>

<style lang="scss"></style>
