<template>
  <div class="f">
    <footer>
      website:
      <router-link to="https://lydia-beer-vue.netlify.app/"
        >lydia-beer-vue</router-link
      >
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
footer {
  height: 100px;
  padding: 3rem 0;
  position: relative;

  background: rgb(232, 158, 12);
  background: linear-gradient(
    0deg,
    rgba(232, 158, 12, 1) 0%,
    rgba(249, 124, 17, 1) 100%
  );
}
@media only screen and (max-width: 500px) {
  .f {
    width: 600px;
  }
}
@media only screen and (max-width: 400px) {
  .f {
    width: 600px;
  }
}
</style>
