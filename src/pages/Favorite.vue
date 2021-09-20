<template>
  <v-container>
    <h1>Избранные анекдоты</h1>
    <joke-card
      v-for="favJokes in favoriteJokes"
      :joke="favJokes"
      :key="favJokes.id"
    />
  </v-container>
</template>

<script>
import JokeCard from "@/components/JokeCard.vue";
export default {
  components: {
    "joke-card": JokeCard,
  },
  computed: {
    favoriteJokes() {
      return this.$store.state.favoriteJokes;
    },
  },
};
</script>
