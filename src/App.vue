<template>
  <div id="app">
    <ButtonList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonList from "./components/ButtonList.vue";

export default defineComponent({
  name: "App",
  components: {
    ButtonList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
