<template>
  <div class="container">
    <b-card
      v-bind:key="beer.id"
      v-for="beer in allBeers "
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
          params: { id: beer.id,  beer:beer },
        }"
        >
          <b-button class="link" size="sm" variant="outline-warning">View Beer details</b-button>
        </router-link>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  name: "Beers",
  //   props: ["beers"],
  methods: { ...mapActions(["fetchBeers"]) },
  computed: mapGetters(["allBeers"]),
  created() {
    this.fetchBeers();
  }
};
</script>
<style scoped>
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
}
.title {
  font-size: 18px;
  color: rgb(121, 121, 121);
}
.link {
  color: grey;
}
.link:hover {
  color: white;
}
</style>
