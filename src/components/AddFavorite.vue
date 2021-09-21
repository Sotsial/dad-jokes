<template>
  <v-btn :outlined="added" @click="addFavorite()" color="success" large
    >В избранное
  </v-btn>
</template>

<script>
export default {
  methods: {
    addFavorite() {
      this.$store.commit("addFavorite");
    },
  },
  computed: {
    added() {
      return this.$store.state.added;
    },
  },
};
</script>
