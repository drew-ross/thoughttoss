<template>
  <header class="Header" :class="[theme, themeColor]">
    <div id="header-content" class="container">
      <h1>thoughttoss</h1>
      <div class="menu-buttons">
        <!-- bold -->
        <button id="btn-bold" @click="textCommand('bold')">
          <strong>B</strong>
        </button>
        <!-- italic -->
        <button id="btn-italic" @click="textCommand('italic')">
          <em>I</em>
        </button>
        <!-- theme mode (dark/light) -->
        <button id="btn-theme-mode" @click="$emit('theme-mode')">
          <div id="btn-theme-mode__white" />
          <div id="btn-theme-mode__switch" />
        </button>
        <!-- theme color -->
        <button id="btn-theme-color" @click="$emit('theme-color')" />
        <!-- print button -->
        <button id="btn-print" @click="printPage">
          <img src="../assets/print-solid.svg" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: ["theme", "themeColor"],
  methods: {
    textCommand: function (command: string) {
      document.execCommand(command, false);
      document.getElementById("content")?.focus();
    },
    printPage: function () {
      print();
    },
  },
});
</script>

<style scoped>
.Header {
  width: 100%;
  height: 5rem;
  padding: 0 6rem;
  background: var(--white);
  box-shadow: var(--smooth-shadow);
  transition: background-color 0.2s;
}

h1 {
  font-size: 1.8rem;
  font-family: var(--font-heading);
  pointer-events: none;
  position: absolute;
  left: 0;
}

button {
  height: 2rem;
  min-width: 2rem;
  font: 1.4rem serif;
  background: var(--black);
  color: var(--white);
  border: none;
  border-radius: 1rem;
  margin: 0 0.2rem;
  box-shadow: var(--smooth-shadow);
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

button:hover {
  transform: translateY(-0.1rem);
  transition-duration: 0.2s;
}

.menu-buttons {
  display: flex;
  justify-items: center;
}

#header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#btn-theme-mode {
  background: var(--black) !important;
  border: 2px solid var(--black);
}

#btn-theme-mode__white,
#btn-theme-mode__switch {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  border-radius: 0 0 1rem 1rem;
}

#btn-theme-mode__white {
  background: var(--white);
}

#btn-theme-mode__switch {
  background: var(--black);
  transition: transform 0.2s;
}

#btn-print {
  padding: 0.38rem;
}

#btn-print img {
  transition: filter 0.2s;
}

/* Theme colors */

/* Dark Mode */
.Header.dark {
  background: var(--black);
}

.Header.dark h1 {
  color: var(--white);
}

.Header.dark button {
  color: var(--black);
  background: var(--white);
}

.Header.dark #btn-theme-mode {
  border-color: var(--white);
}

.Header.dark #btn-theme-mode__switch {
  background: var(--white);
}

/* Light Mode */
.Header.light #btn-print img {
  filter: invert();
}

.Header.light #btn-theme-mode__switch {
  transform: rotate(180deg);
}

/* Pink */
.Header.pink h1 {
  color: var(--theme-pink);
}

.Header.pink button,
.Header.pink #btn-theme-mode__switch {
  background: var(--theme-pink);
}

.Header.pink #btn-theme-mode {
  border-color: var(--theme-pink);
}

/* Green */
.Header.green h1 {
  color: var(--theme-green);
}

.Header.green button,
.Header.green #btn-theme-mode__switch {
  background: var(--theme-green);
}

.Header.green #btn-theme-mode {
  border-color: var(--theme-green);
}

/* Blue */
.Header.blue h1 {
  color: var(--theme-blue);
}

.Header.blue button,
.Header.blue #btn-theme-mode__switch {
  background: var(--theme-blue);
}

.Header.blue #btn-theme-mode {
  border-color: var(--theme-blue);
}

/* Media */
@media only screen and (max-width: 768px) {
  .Header {
    height: 6.4rem;
  }
  #header-content {
    flex-direction: column;
  }
  h1 {
    position: initial;
  }
}
@media print {
  .menu-buttons {
    display: none;
  }
  .Header {
    height: 2.4rem;
  }
  h1 {
    font-size: 0.8rem;
    position: inherit;
    margin: auto;
  }
}
</style>
