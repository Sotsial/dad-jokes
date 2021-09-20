<template>
  <v-container class="d-flex flex-column align-center">
    <h1>Dad jokes</h1>
    <joke-card :joke="joke" class="mb-5 joke-card" />
    <div>
      <new-joke-button />
      <add-favorite class="ml-3" />
    </div>
  </v-container>
</template>

<script>
import JokeCard from "@/components/JokeCard.vue";
import NewJokeButton from "@/components/NewJokeButton";
import AddFavorite from "@/components/AddFavorite.vue";
export default {
  components: {
    "joke-card": JokeCard,
    "new-joke-button": NewJokeButton,
    "add-favorite": AddFavorite,
  },
  computed: {
    joke() {
      return this.$store.state.joke;
    },
  },
};
</script>

<style scoped>
.joke-card {
  max-width: 600px;
  min-width: 400px;
  min-height: 65px;
}
</style>
