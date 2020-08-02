import Vuex from "vuex";
import Vue from "vue";
import beers from "./modules/beers";

//load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  modules: {
    beers,
  },
});

// combine all modules and add them to vuex store
