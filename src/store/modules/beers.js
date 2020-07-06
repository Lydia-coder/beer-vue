import axios from "axios";

const state = {
  beers: [],
  currentBeer: null,
  //filteredBeers: []
};

const getters = {
  allBeers: (state) => state.beers,
  currentBeer: (state) => state.currentBeer,
  //getFilters: (state) => state.filters
};

const actions = {
  async fetchBeers({ commit }) {
    try {
      const response = await axios.get("https://api.punkapi.com/v2/beers");

      commit("setBeers", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateCurrentBeer({ commit, state }, id) {
    const beer = state.beers.find((el) => el.id === id);

    commit("setCurrentBeer", beer);
  },
};

const mutations = {
  setBeers: (state, beers) => (state.beers = beers),
  setCurrentBeer: (state, currentBeer) => (state.currentBeer = currentBeer),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
