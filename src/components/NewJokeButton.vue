<template>
  <v-btn @click="newJokes()" width="400px">Загрузить еще</v-btn>
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
