<template>
  <div class="App" :class="theme">
    <Header
      :theme="theme"
      :themeColor="themeColor.color"
      @theme-mode="switchThemeMode"
      @theme-color="switchThemeColor"
    />
    <Canvas :theme="theme" :themeColor="themeColor.color" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Theme } from "./types";
import { IThemeColor } from "./interfaces";
import { THEME_COLORS } from "./constants";

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
      themeColor: this.loadThemeColor(),
    };
  },
  methods: {
    switchThemeMode: function () {
      this.theme === "light" ? (this.theme = "dark") : (this.theme = "light");
      localStorage.setItem("theme", this.theme);
    },
    switchThemeColor: function () {
      // get the index for the next theme color
      let newThemeIdx = this.themeColor.index + 1;
      if (newThemeIdx >= THEME_COLORS.length) newThemeIdx = 0;
      // create new themeColor object
      const newTheme = {
        index: newThemeIdx,
        color: THEME_COLORS[newThemeIdx],
      } as IThemeColor;
      // save new themeColor to state and localStorage
      this.themeColor = newTheme;
      this.saveThemeColor(newTheme);
    },
    loadThemeColor: function () {
      let themeColor = { index: 0, color: THEME_COLORS[0] } as IThemeColor;
      const loadedThemeColor = JSON.parse(
        localStorage.getItem("themeColor") as string
      );
      if (loadedThemeColor) {
        themeColor = loadedThemeColor;
      } else {
        // if there is no stored value, store default
        this.saveThemeColor(themeColor);
      }
      return themeColor;
    },
    saveThemeColor: function (themeColor: IThemeColor) {
      localStorage.setItem("themeColor", JSON.stringify(themeColor));
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
