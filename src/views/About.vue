<template>
  <div class="about">
    <Header />
    <div class="body">
      <p>
        This a app that fetches data from PunkApi. The app starts on the home
        page displaying a list of beers. To see more details about a beer click
        on the vieuw more button. Here you can see in de slide more info about
        the beer you have chosen. When clicking on the hamburger menu you can
        see the : - home page - about page - random page when you click random
        you will be redirected to a random beer an its details You can search
        beers based on : name, ingredients, food pairing and date.
      </p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  name: "About",
  components: { Header },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

.body {
  border: solid 2px orange;
  padding: 100px;
  margin: 20px;
}
p {
  font-family: "Indie Flower", cursive;
}
</style>
