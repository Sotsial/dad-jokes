<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Dad jokes</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" class="ml-3" outlined>Главная</v-btn>
      <v-btn to="/favorite" class="ml-3" outlined>Избранные</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
