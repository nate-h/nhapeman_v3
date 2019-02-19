<template>
    <header-container header="MyTunes">
        <div v-if="$route.name !== 'MyTunes'">
            Brief description
        </div>
        <div v-if="$route.name === 'MyTunes'">
            Long description
        </div>
    </header-container>
</template>

<script>
export default {
    name: "ProjectMyTunes",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss"></style>
