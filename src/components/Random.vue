<template>
  <div>
    <Header />
    <div v-bind:key="random.id" v-for="random in getRandomBeer " class="body">
      <h3>{{random.name}}</h3>
      <div class="box">
        <b-img center :src="random.image_url" fluid :alt="random.name"></b-img>
      </div>
      <div>
        <div>
          <p>{{random.description}}</p>

          <h4>ABV:</h4>
          <p>{{random.abv}}%</p>

          <h4>First Brewed:</h4>
          <p>{{random.first_brewed}}</p>

          <h4>Description:</h4>
          <p>{{random.description}}</p>

          <h4>Brewers Tips:</h4>
          <p>{{random. brewers_tips}}</p>

          <h4>Food Pairing :</h4>
          <ul v-for="food in random.food_pairing" :key="food">
            <li>{{food}}</li>
          </ul>

          <button class="btn" v-on:click="reloadPage">click for another beer!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Random",
  components: {
    Header
  },

  methods: {
    ...mapActions(["getRandom"]),
    reloadPage() {
      window.location.reload();
    }
  },

  computed: mapGetters(["getRandomBeer"]),

  created() {
    this.getRandom();
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Modak&family=Shadows+Into+Light&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

.body {
  border: solid 2px orange;
  padding: 100px;
  margin: 20px;
}
img {
  max-width: 100%;
  max-height: 100%;
  display: block; /* remove extra space below image */
}
.box {
  margin-top: 20px;
  height: 300px;
}
h3 {
  font-family: "Bangers", cursive;
  text-align: center;
  font-size: 50px;
}
h4 {
  text-align: center;
  font-family: "Bangers", cursive;
  font-size: 25px;
}
p {
  text-align: center;
  font-family: "Indie Flower", cursive;
  font-size: 20px;
}
ul {
  text-align: center;
  list-style: none;
  font-family: "Indie Flower", cursive;
  font-size: 20px;
}
.btn {
  background-color: white;
  border: 1px solid orange;
  margin-left: 300px;
}
</style>