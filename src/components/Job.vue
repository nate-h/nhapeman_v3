<template>
    <div class="job-container l-to-r lt">
        <!-- Content inserted here! -->
        <div class="leftside">
            <img :src="img" />
        </div>
        <div class="rightside">
            <h2>
                <a :href="link">{{ company }}</a>
                <small class="date right">{{ years }}</small>
            </h2>

            <h3>{{ shortDescription }}</h3>
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "JobContainer",
    data() {
        return {};
    },
    props: ["company", "img", "link", "years", "short-description"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$img-side: 200px;

.job-container {
    .leftside {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: $padding-large;
        width: $img-side;
    }

    .rightside {
        flex-grow: 1;

        .date {
            margin-left: $margin-large;
            color: $dark3;
        }
    }

    img:first-of-type {
        height: 200px;
        width: 200px;
    }
}

@media screen and (max-width: $break-large) {
    .job-container {
        @include holder("t-to-b", "lt", "ca");
    }
}
</style>
