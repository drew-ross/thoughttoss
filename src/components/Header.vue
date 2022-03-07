<template>
  <header class="Header" :class="[theme, themeColor]">
    <div id="header-content" class="container">
      <h1>thoughttoss</h1>
      <div class="menu-buttons">
        <!-- bold -->
        <button @click="textCommand('bold')"><strong>B</strong></button>
        <!-- italic -->
        <button @click="textCommand('italic')"><em>I</em></button>
        <!-- theme mode (dark/light) -->
        <button class="btn-theme-mode" @click="$emit('theme-mode')">
          <div class="btn-inner-white" />
          <div class="btn-inner-switch" />
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
    textCommand: (command: string) => {
      document.execCommand(command, false);
      document.getElementById("content")?.focus();
    },
  },
});
</script>

<style scoped>
#header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.Header {
  width: 100%;
  height: 5rem;
  padding: 0 6rem;
  background: var(--white);
  box-shadow: var(--smooth-shadow);
  transition: background-color 0.5s;
}

.Header.dark {
  background: var(--black);
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
  font-size: 1.4rem;
  background: var(--theme-pink);
  color: var(--white);
  border: none;
  border-radius: 1rem;
  margin: 0 0.2rem;
  box-shadow: var(--smooth-shadow);
  cursor: pointer;
  position: relative;
}

button:hover {
  transform: translateY(-0.1rem);
  transition-duration: 0.2s;
}

.menu-buttons {
  display: flex;
  justify-items: center;
}

.btn-theme-mode {
  background: var(--black) !important;
  border: 2px solid;
}

.Header.light .btn-inner-switch {
  transform: rotate(180deg);
}

.btn-inner-white,
.btn-inner-switch {
  position: absolute;
  transition-duration: 0.2s;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  border-radius: 0 0 1rem 1rem;
}

.btn-inner-white {
  background: var(--white);
}

/* Theme colors */

/* Pink */
.Header.pink h1 {
  color: var(--theme-pink);
}

.Header.pink button,
.Header.pink .btn-inner-switch {
  background: var(--theme-pink);
}

.Header.pink .btn-theme-mode {
  border-color: var(--theme-pink);
}

/* Green */
.Header.green h1 {
  color: var(--theme-green);
}

.Header.green button,
.Header.green .btn-inner-switch {
  background: var(--theme-green);
}

.Header.green .btn-theme-mode {
  border-color: var(--theme-green);
}

/* Blue */
.Header.blue h1 {
  color: var(--theme-blue);
}

.Header.blue button,
.Header.blue .btn-inner-switch {
  background: var(--theme-blue);
}

.Header.blue .btn-theme-mode {
  border-color: var(--theme-blue);
}
</style>
