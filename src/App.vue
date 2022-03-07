<template>
  <div class="App" :class="theme">
    <Header
      @theme-mode="switchThemeMode"
      :theme="theme"
      :themeColor="themeColor"
    />
    <Canvas :theme="theme" :themeColor="themeColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Theme, ThemeColor } from "./types";

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
      theme: localStorage.getItem("theme") || ("light" as Theme),
      themeColor: localStorage.getItem("themeColor") || ("green" as ThemeColor),
    };
  },
  methods: {
    switchThemeMode: function () {
      this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
      localStorage.setItem("theme", this.theme);
    },
    switchThemeColor: function (color: ThemeColor) {
      this.themeColor = color;
      localStorage.setItem("themeColor", this.themeColor);
    },
  },
});
</script>

<style>
.App {
  min-height: 100vh;
  width: 100vw;
  transition: background-color 0.5s, color 0.5s;
}

.App.light {
  background: var(--white);
}

.App.dark {
  background: var(--gray-dark);
}

.container {
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
