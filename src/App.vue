<template>
  <div class="Blocks">
    <Block v-for="(block, i) in blocks" :key="i" :block="block" />
    <button v-on:click="addBlock(0)">Add Block</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Block from "./components/Block.vue";

import suggestions from "./data/suggestions";
import { IBlock } from "./interfaces";

export default defineComponent({
  name: "App",
  components: {
    Block,
  },
  data() {
    return {
      blocks: [] as IBlock[],
    };
  },
  methods: {
    addBlock(index: number) {
      this.blocks.push({
        heading: suggestions[index].text,
        cols: suggestions[index].cols,
        text1: "",
        text2: "",
      });
    },
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
  margin-top: 60px;
}
</style>
