<template>
  <div class="Blocks">
    <Block v-for="(block, i) in blocks" :key="i" :block="block" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Block from "./components/Block.vue";

export default defineComponent({
  name: "App",
  components: {
    Block,
  },
  data: () => ({
    blocks: [1, 2, 3],
  }),
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
