<template>
  <div id="app">
    <Header />
    <Beers />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Beers from "../components/Beers";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import axios from "axios";
export default {
  name: "Home",
  components: { Beers, Header, Footer }
  // data() {
  //   return {
  //     beers: [],
  //   };
  // },
  // created() {
  //   axios
  //     .get("https://api.punkapi.com/v2/beers")
  //     .then((res) => (this.beers = res.data))
  //     .catch((error) => console.log(error));
  // },
};
</script>
