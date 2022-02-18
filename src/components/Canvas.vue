<template>
  <div class="Canvas" :class="[theme, themeColor]">
    <div class="container">
      <div id="content" contenteditable="true" spellcheck="false" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
  props: ["theme", "themeColor"],
});
</script>

<style>
.Canvas {
  height: 100%;
  padding: 4rem 6rem;
  min-height: calc(100vh - 5rem);
}

#content {
  font-size: 1.5rem;
  min-height: calc(100vh - 14rem);
  width: 100%;
  font-family: var(--font-main);
  color: var(--gray-dark);
}

#content:focus {
  outline: none;
}

::selection {
  color: var(--white);
}

/* Theme colors */

/* Dark-mode */
.Canvas.dark #content {
  color: var(--white);
}

/* Pink */
.Canvas.pink #content {
  caret-color: var(--theme-pink-50);
}

.Canvas.pink ::selection {
  background: var(--theme-pink);
}

/* Green */
.Canvas.green #content {
  caret-color: var(--theme-green);
}

.Canvas.green ::selection {
  background: var(--theme-green);
}

/* Blue */
.Canvas.blue #content {
  caret-color: var(--theme-blue-50);
}

.Canvas.blue ::selection {
  background: var(--theme-blue);
}
</style>
