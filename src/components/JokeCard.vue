<template>
  <v-card elevation="2" outlined class="pa-1">
    <v-card-title>{{ joke.joke }}</v-card-title>
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
