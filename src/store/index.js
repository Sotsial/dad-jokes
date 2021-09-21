import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: {},
    favoriteJokes: [],
    filter: "",
    added: false,
  },

  mutations: {
    updateJokes(state, newJoke) {
      state.joke = newJoke;
      state.added = false;
    },
    addFavorite(state) {
      if (!state.favoriteJokes.find((j) => j.id == state.joke.id)) {
        state.favoriteJokes.push(state.joke);
      }

      state.added = true;
    },
    inputFilter(state, filter) {
      state.filter = filter;
    },
  },

  getters: {
    filterJokes(state) {
      return state.favoriteJokes.filter((joke) =>
        joke.joke.includes(state.filter)
      );
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
