<template>
  <div>
    <v-container fluid>
      Cart
    </v-container>
  </div>
</template>

<script>
  export default {
    props: {

    },
    data() {
      return {
        scrollInvoked: 0
      };
    },
    methods: {
      onScroll() {
        this.scrollInvoked++;
      }
    }
  };
</script>

<style scoped>

</style>
