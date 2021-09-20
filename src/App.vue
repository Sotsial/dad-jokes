<template>
  <v-app>
    <nav-bar />

    <router-view />
  </v-app>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
export default {
  components: {
    "nav-bar": NavBar,
  },
  name: "App",
  mounted() {
    this.$store.dispatch("fetchJokes");
  },
};
</script>
