<template>
  <v-card min-width="600px">
    <joke-card :joke="joke" class="mb-5" />
    <new-joke-button />
  </v-card>
</template>
<script>
import JokeCard from "@/components/JokeCard.vue";
import NewJokeButton from "@/components/NewJokeButton";

export default {
  components: {
    "joke-card": JokeCard,
    "new-joke-button": NewJokeButton,
  },

  computed: {
    joke() {
      return this.$store.state.joke;
    },
  },
};
</script>
