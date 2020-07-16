<template>
  <div class="container">
    <div>
      <Search />
    </div>

    <div v-for="beer in filteredBeers" v-bind:key="beer.id">
      <b-card
        :img-src="beer.image_url"
        :alt="beer.name"
        img-top
        tag="article"
        style="max-width: 22rem  ;"
        class="mb-2"
      >
        <b-card-text class="c-text">
          <h4 class="title">{{ beer.name }}</h4>
          <p>{{ beer.ingredients.malt[0].name }}</p>

          <router-link
            :to="{
              name: 'BeerDetails',
              params: { id: beer.id, beer: beer },
            }"
          >
            <b-button class="link" size="sm" variant="outline-warning"
              >View Beer details</b-button
            >
          </router-link>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Search },
  name: "Beers",

  //props: ["beer.hidden"],
  methods: {
    ...mapActions(["fetchBeers"]),
  },
  computed: mapGetters(["filteredBeers"]),

  created() {
    this.fetchBeers();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Modak&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
.container:after {
  content: "";
  display: table;
  clear: both;
}

.mb-2 {
  float: left;
  width: 33.33%;
  box-shadow: -9px 39px 20px -15px rgba(0, 0, 0, 0.75);

  margin: 7px;
}

.mb-2:hover {
  transform: scale(1.2);
  z-index: 1;
}
.card-img-top {
  width: 100%;
  height: 14vw;
  object-fit: contain;
  margin-top: 5px;
}
.card-img-top:hover {
  opacity: 0.9;
}
.card-body {
  background-color: white;
  outline: orange solid 0.9px;
  outline-offset: -8px;
}
.c-text {
  font-size: 13px;
  white-space: nowrap;
  padding-bottom: 8px;
  padding-top: 8px;
  outline: orange solid 0.9px;
  outline-offset: -1px;
  font-family: "Indie Flower", cursive;
}
.title {
  font-size: 18px;
  color: rgb(121, 121, 121);
  font-family: "Bangers", cursive;
}
.link {
  color: grey;
}
.link:hover {
  color: white;
}

@media only screen and (max-width: 800px) {
  .title {
    font-size: 9px;
  }
  .mb-2 {
    width: 30.5%;
  }
  .card-img-top {
    width: 100%;
    height: 16vw;
  }
  .c-text {
    font-size: 8px;
    outline: orange solid 0.9px;
    outline-offset: 2px;
  }
  .btn-sm {
    padding: 2px;
  }
}
@media only screen and (max-width: 500px) {
  .title {
    font-size: 12px;
  }
  .c-text {
    font-size: 10px;
  }
  .mb-2 {
    width: 40%;
  }
  .card-img-top {
    width: 100%;
    height: 19vw;
  }
}
@media only screen and (max-width: 400px) {
  .title {
    font-size: 10px;
  }
  .mb-2 {
    width: 50%;
  }
}
</style>
