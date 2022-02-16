<template>
  <header class="Header" :class="theme">
    <div class="container flex">
      <h1>thoughttoss</h1>
      <div class="menu-buttons">
        <button @click="textCommand('bold')"><strong>B</strong></button>
        <button @click="textCommand('italic')"><em>I</em></button>
        <button
          class="btn-theme-mode"
          :class="theme"
          @click="$emit('theme-mode')"
        >
          <div class="btn-inner-semi" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: ["theme"],
  methods: {
    textCommand: (command: string) => {
      document.execCommand(command, false);
      document.getElementById("content")?.focus();
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
  transition-duration: 0.5s;
}

.Header.dark {
  background: var(--black);
}

h1 {
  font-size: 1.8rem;
  color: var(--theme-primary);
  font-family: var(--font-heading);
  pointer-events: none;
}

button {
  height: 2rem;
  min-width: 2rem;
  font-size: 1.4rem;
  background: var(--theme-primary);
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
  margin-left: auto;
  display: flex;
  justify-items: center;
}

.btn-theme-mode {
  background: var(--black);
  border: 2px solid var(--theme-primary);
}

.btn-theme-mode.light .btn-inner-semi {
  transform: rotate(180deg);
}

.btn-inner-semi {
  position: absolute;
  transition-duration: 0.2s;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  border-radius: 0 0 1rem 1rem;
  background: var(--white);
  z-index: 100;
}

.flex {
  display: flex;
  align-items: center;
}
</style>
