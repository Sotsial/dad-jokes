<template>
  <div>
    <v-card-title>{{ joke.joke }}</v-card-title>
  </div>
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
