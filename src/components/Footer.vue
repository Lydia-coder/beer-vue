<template>
  <div>
    <footer>
      website:
      <router-link to="http://localhost:8080/">beer</router-link>
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
</style>
