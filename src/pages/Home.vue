<template>
  <v-container class="d-flex flex-column align-center">
    <joke-generator class="d-inline-flex flex-column align-center" />
  </v-container>
</template>

<script>
import JokeGenerator from "@/components/JokeGenerator.vue";
export default {
  components: {
    "joke-generator": JokeGenerator,
  },
};
</script>
