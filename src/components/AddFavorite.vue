<template>
  <v-btn @click="addFavorite()" color="success" large outlined
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
};
</script>
