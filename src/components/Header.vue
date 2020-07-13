<template>
  <div class="box">
    <section>
      <Nav />

      <div class="wrapper">
        <h1 class="giga bree-serif regular double-header-line">Beer app</h1>
        <p class="delta oswald regular uppercase ls-large">by Lydia Michael Smeets</p>
      </div>
    </section>
  </div>
</template>
<script>
import Nav from "../components/Nav";

export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>
<style scoped>
.box {
}
section {
  height: 300px;
  padding: 3rem 0;
  position: relative;

  background: rgb(232, 158, 12);
  background: linear-gradient(
    0deg,
    rgba(232, 158, 12, 1) 0%,
    rgba(249, 124, 17, 1) 100%
  );
}

.wrapper {
  max-width: 53.33rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  transform: translateY(-50%);
  top: 50%;
  text-align: center;
}
h1 {
  line-height: 1;
  margin-top: 0;
  color: #fff;
  display: inline-block;
  position: relative;
}
p {
  margin-top: 4rem;
  color: #fff;
  font-size: 0.9rem;
  line-height: 1;
  animation: fadein 5s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.double-header-line:before,
.double-header-line:after {
  content: "";
  display: block;
  position: absolute;
  width: 7rem;
  background-color: transparent;
  height: 4px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  top: 50%;
  margin-bottom: -4px;
}
.double-header-line:before {
  left: -7.5rem;
}
.double-header-line:after {
  right: -7.5rem;
}
.bree-serif {
  font-family: "Bree Serif";
}
.oswald {
  font-family: "Oswald";
}
.giga {
  font-size: 5rem; /* 90 / 18 = 5 */
  margin-bottom: 0.33rem;
}
.ls-large {
  letter-spacing: 8px;
}
.uppercase {
  text-transform: uppercase;
}
</style>