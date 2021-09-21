<template>
  <v-container>
    <h1>Избранные анекдоты</h1>
    <find-jokes />
    <div v-if="filterJokes.length > 0">
      <joke-card
        v-for="favJokes in filterJokes"
        :joke="favJokes"
        :key="favJokes.id"
        class="mb-2"
      />
    </div>

    <div v-else>
      <h2>Список пуст</h2>
    </div>
  </v-container>
</template>

<script>
import JokeCard from "@/components/JokeCard.vue";
import FindJokes from "@/components/FindJokes.vue";
export default {
  components: {
    "joke-card": JokeCard,
    "find-jokes": FindJokes,
  },
  computed: {
    filterJokes() {
      return this.$store.getters.filterJokes;
    },
  },
};
</script>
