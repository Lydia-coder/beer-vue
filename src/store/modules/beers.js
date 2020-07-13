import axios from "axios";

const state = {
  beers: [],
  currentBeer: null,
  randomBeer: null,
  searchString: "",
};

const getters = {
  allBeers: (state) => state.beers,
  currentBeer: (state) => state.currentBeer,
  getRandomBeer: (state) => state.randomBeer,
  filteredBeers: (state) => {
    if (state.searchString) {
      const query = state.searchString.toLowerCase();
      return state.beers.filter(
        (beer) =>
          beer.name.toLowerCase().includes(query) ||
          beer.ingredients.malt.some((malt) =>
            malt.name.toLowerCase().includes(query)
          ) ||
          beer.ingredients.hops.some((hop) =>
            hop.name.toLowerCase().includes(query)
          ) ||
          beer.ingredients.yeast.toLowerCase().includes(query) ||
          beer.food_pairing.some((food) =>
            food.toLowerCase().includes(query)
          ) ||
          beer.abv.toString().includes(query)
      );
    } else if (state.searchString == "") {
      return state.beers;
    }
  },
};

const actions = {
  async fetchBeers({ commit }) {
    try {
      const response = await axios.get(
        "https://api.punkapi.com/v2/beers/random"
      );

      commit("setBeers", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updateCurrentBeer({ commit, state }, id) {
    try {
      const beer = state.beers.find((el) => el.id === id);

      commit("setCurrentBeer", beer);
    } catch (error) {
      console.log(error);
    }
  },

  async getRandom({ commit }) {
    try {
      const response = await axios.get(
        "https://api.punkapi.com/v2/beers/random"
      );
      commit("setRandomBeer", response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async setSearchString({ commit }, searchString) {
    try {
      commit("setSearchString", searchString);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setBeers: (state, beers) => (state.beers = beers),
  setCurrentBeer: (state, currentBeer) => (state.currentBeer = currentBeer),
  setRandomBeer: (state, beer) => (state.randomBeer = beer),
  setSearchString: (state, searchString) => (state.searchString = searchString),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

//
