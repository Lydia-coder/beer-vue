import Vuex from "vuex";
import Vue from "vue";
import beers from "./modules/beers";

//load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beers,
  },
});
