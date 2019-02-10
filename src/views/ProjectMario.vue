<template>
  <header-container header="Project Mario">
      <div v-if="$route.name !== 'Mario'">
          Brief description
      </div>
      <div v-if="$route.name === 'Mario'">
          Long description
      </div>
  </header-container>
</template>

<script>
export default {
    name: "ProjectMario",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss">
</style>
