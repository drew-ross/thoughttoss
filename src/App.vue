<template>
  <div class="App" :class="theme">
    <Header />
    <Canvas />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Theme } from "./types";

import Canvas from "./components/Canvas.vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Canvas,
  },
  data() {
    return {
      theme: "light" as Theme,
    };
  },
  methods: {},
});
</script>

<style>
.App {
  min-height: 100vh;
  width: 100vw;
}

.App.light {
  background: var(--white);
}

.App.dark {
  background: var(--gray-dark);
}
</style>
