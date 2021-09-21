<template>
  <v-card elevation="2" outlined>
    <v-card-title>{{ joke.joke }}</v-card-title>
    <v-card-subtitle class="subtitle">ID: {{ joke.id }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    joke: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card__subtitle {
  padding: 5px 15px;
}
</style>
