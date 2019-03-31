<template>
    <project-template>
        <template v-slot:summaryImage>
            <img src="~img/recordName.png" />
        </template>

        <template v-slot:summaryText>
            <p>
                Before I got into streaming, I had a pretty big music
                collection. I was really into making playlist but was frustrated
                at how iTunes didn't have the best UI for managing playlists.
                Trying to improve my coding skills, I thought it would be fun to
                create my own version of iTunes with some cool features for
                managing playlists. So I created MyTunes. In creating it, I
                learned a good amount about multithread synchronization, object
                serialization, regex filters, swing components
            </p>
        </template>

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
    name: "MyTunes",
    path: "mytunes",
    listed: true,
    data() {
        return {
            title: "MyTunes, a music player",
            description: "Java and JavaZOOM",
            buttonText: "Demo"
        };
    }
};
</script>

<style lang="scss"></style>
