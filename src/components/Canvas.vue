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
}

#content {
  font-size: 1.5rem;
  /* 100vh - (header height + Canvas y-padding) */
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
  background: var(--black);
}

/* Theme colors */

/* Dark-mode */
.Canvas.dark #content {
  color: var(--white);
}

.Canvas.dark ::selection {
  color: var(--black);
  background: var(--white);
}

/* Pink */
.Canvas.pink #content {
  color: var(--theme-pink);
  caret-color: var(--theme-pink-50);
}

.Canvas.pink ::selection {
  background: var(--theme-pink);
}

/* Green */
.Canvas.green #content {
  color: var(--theme-green);
  caret-color: var(--theme-green);
}

.Canvas.green ::selection {
  background: var(--theme-green);
}

/* Blue */
.Canvas.blue #content {
  color: var(--theme-blue);
  caret-color: var(--theme-blue-50);
}

.Canvas.blue ::selection {
  background: var(--theme-blue);
}

/* Media */
@media only screen and (max-width: 768px) {
  .Canvas {
    padding: 2rem;
  }
  #content {
    /* 100vh - (header height + Canvas y-padding) */
    min-height: calc(100vh - 10.4rem);
  }
}
</style>
