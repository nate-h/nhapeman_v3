<template>
    <div>
        <project-summary
            v-if="showSummary()"
            button-text="View Demo"
            :link="path"
            :name="name"
        >
            <template v-slot:img>
                <img src="~img/recordName.png" />
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
import ProjectBase from "@/mixins/ProjectBase.vue";
export default {
    name: "ProjectMyTunes",
    path: "mytunes",
    mixins: [ProjectBase],
    data() {
        return {
            title: "MyTunes, a Java implemented music player"
        };
    }
};
</script>

<style lang="scss"></style>
