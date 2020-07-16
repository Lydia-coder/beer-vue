import axios from "axios";

const state = {
  beers: [],
  currentBeer: null,
  randomBeer: null,
  searchString: "",
  brewedBefore: [],
  // brewedAfter: [],
};

const getters = {
  allBeers: (state) => state.beers,
  currentBeer: (state) => state.currentBeer,
  getRandomBeer: (state) => state.randomBeer,
  // getBrewedBefore: (state) => state.brewedBefore,
  getBrewedAfter: (state) => state.brewedAfter,
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
          beer.abv.toString().includes(query) ||
          beer.first_brewed.toString().includes(query)
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
        "https://api.punkapi.com/v2/beers?per_page=60&brewed_before=11-2016"
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
  // async brewedBefore({ commit }) {
  //   try {
  //     const response = await axios.get(
  //       "https://api.punkapi.com/v2/beers?brewed_before=10-2015"
  //     );
  //     //console.log(response);
  //     commit("setBrewed", response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // async brewedAfter({ commit }) {
  //   try {
  //     const response = await axios.get(
  //       "https://api.punkapi.com/v2/beers?brewed_after=10-2015"
  //     );
  //     //console.log(response);
  //     commit("setBrewedAfter", response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};

const mutations = {
  setBeers: (state, beers) => (state.beers = beers),
  setCurrentBeer: (state, currentBeer) => (state.currentBeer = currentBeer),
  setRandomBeer: (state, beer) => (state.randomBeer = beer),
  setSearchString: (state, searchString) => (state.searchString = searchString),
  // setBrewed: (state, beer) => (state.brewedBefore = beer),
  // setBrewedAfter: (state, beer) => (state.brewedAfter = beer),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

//
