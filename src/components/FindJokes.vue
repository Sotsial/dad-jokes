<template>
  <v-text-field v-model="filter" placeholder="Поиск" />
</template>

<script>
export default {
  data() {
    return {
      filter: "",
    };
  },
  watch: {
    filter() {
      this.$store.commit("inputFilter", this.filter);
    },
  },
};
</script>
