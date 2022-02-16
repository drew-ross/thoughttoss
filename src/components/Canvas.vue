<template>
  <div class="Canvas" :class="theme">
    <div class="container">
      <div id="content" contenteditable="true" spellcheck="false" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
  props: ["theme"],
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
  caret-color: var(--theme-pink-50);
}

#content b {
  color: var(--theme-pink);
}

.Canvas.dark #content {
  color: var(--white);
}

::selection {
  background: var(--theme-pink);
  color: var(--white);
}

#content:focus {
  outline: none;
}
</style>
