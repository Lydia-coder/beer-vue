<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1">
        <b-form-input id="input-1" v-model="form.search" type="text" placeholder="search"></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      form: {
        search: ""
      }
    };
  },
  methods: {
    ...mapActions(["setSearchString"]),
    onSubmit(evt) {
      //console.log("Submit");
      evt.preventDefault();
      this.setSearchString(this.form.search);
    }
  }
};
</script>

<style scoped>
</style>