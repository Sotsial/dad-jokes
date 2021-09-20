import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "",
  },

  mutations: {
    updateJokes(state, newJoke) {
      state.joke = newJoke;
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
