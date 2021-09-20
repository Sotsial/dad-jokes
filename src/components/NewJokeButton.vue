<template>
  <v-btn large @click="newJokes()" color="primary"> Загрузить еще </v-btn>
</template>

<script>
export default {
  methods: {
    newJokes() {
      this.$store.dispatch("fetchJokes");
    },
  },
};
</script>
