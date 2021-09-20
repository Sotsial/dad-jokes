import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: {},
    favoriteJokes: [],
  },

  mutations: {
    updateJokes(state, newJoke) {
      state.joke = newJoke;
    },
    addFavorite(state) {
      state.favoriteJokes.push(state.joke);
      console.log(state.favoriteJokes);
    },
  },

  actions: {
    async fetchJokes(context) {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const jokes = await res.json();

      context.commit("updateJokes", jokes);
    },
  },
  modules: {},
});
