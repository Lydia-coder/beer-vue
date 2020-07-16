<template>
  <div>
    <Header />
    <div class="outline">
      <b-carousel
        id="carousel-1"
        :interval="8000"
        controls
        indicators
        background="rgb(232, 158, 12)"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"-->

        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="currentBeer.image_url"
              :alt="currentBeer.name"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide img-blank :img-alt="currentBeer.name">
          <h3>{{ currentBeer.name }}</h3>
          <img
            class="gif"
            src="https://blog.joypixels.com/content/images/2019/12/clinking_beer_mugs-1.gif"
            alt="beer"
          />
          <div>
            <h4>ABV:</h4>
            <li>{{ currentBeer.abv }}%</li>
          </div>

          <h4>First Brewed:</h4>
          <p>{{ currentBeer.first_brewed }}</p>
        </b-carousel-slide>

        <b-carousel-slide img-blank :img-alt="currentBeer.name">
          <div>
            <h4>Description:</h4>
            <p>{{ currentBeer.description }}</p>
          </div>

          <div>
            <h4>Food Pairing :</h4>
            <ul v-for="food in currentBeer.food_pairing" :key="food">
              <li>{{ food }}</li>
            </ul>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Header from "./Header";
export default {
  name: "BeerDetail",
  components: { Header },
  computed: mapGetters(["currentBeer", "allBeers"]),

  methods: {
    ...mapActions(["updateCurrentBeer", "setCurrentBeer", "fetchBeers"])
  },

  async created() {
    const id = parseInt(this.$route.params.id);
    if (this.allBeers.length > 0) {
      console.log("have bears in vuex");
      this.updateCurrentBeer(id);
    } else if (
      localStorage.getItem("currentBeer") &&
      id === JSON.parse(localStorage.getItem("currentBeer")).id
    ) {
      console.log("have currentBear with correct id in local storage");
      const currentBeer = JSON.parse(localStorage.getItem("currentBeer"));
      this.$store.commit("setCurrentBeer", currentBeer);
    } else {
      console.log("have nothing");
      await this.fetchBeers();
      this.updateCurrentBeer(id);
    }
  },

  watch: {
    currentBeer: {
      handler() {
        if (this.currentBeer) {
          console.log("beers set?");
          localStorage.setItem("currentBeer", JSON.stringify(this.currentBeer));
        }
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Modak&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
.img-fluid {
  width: 100%;
  height: 36vw;
  object-fit: contain;
}
#carousel-1 {
  margin: 70px;
  outline: 2px solid orange;
  outline-offset: 50px;
}
.d-block {
  margin-top: 10px;
  margin-bottom: 6px;
}

h3 {
  margin: auto;
  color: white;
  text-align: center;
  font-family: "Bangers", cursive;
}
h4 {
  font-family: "Bangers", cursive;
}
li {
  list-style-type: none;
  text-align: center;
}
p ::before {
  content: "\A";
  white-space: pre;
}

p {
  font-family: "Indie Flower", cursive;
  font-size: 20px;
}
ul {
  font-family: "Indie Flower", cursive;
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  gif {
    height: 25px;
    width: 24px;
  }
  h4 {
    font-size: 1px;
  }
  p {
    font-size: 0.7px;
  }
  li {
    font-size: 0.7px;
    line-height: 0%;
  }
  ul {
    font-size: 0.7px;
  }
  h3 {
    font-size: 22px;
  }
  #carousel-1 {
    margin: 3px;
    outline: 2px solid orange;
    outline-offset: 1px;
  }
}
@media only screen and (max-width: 700px) {
  .gif {
    height: 25px;
    width: 24px;
  }
  h4 {
    font-size: 4px;
  }
  p {
    font-size: 2px;
  }
  li {
    font-size: 2px;
  }
  h3 {
    font-size: 22px;
  }
  #carousel-1 {
    margin: 40px;
    outline: 2px solid orange;
    outline-offset: 20px;
  }
}
@media only screen and (max-width: 900px) {
  .gif {
    height: 30px;
    width: 30px;
  }
  h4 {
    font-size: 13px;
  }
  p {
    font-size: 10px;
  }
  li {
    font-size: 10px;
  }
}
</style>
