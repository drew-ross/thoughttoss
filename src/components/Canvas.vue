<template>
  <div class="Canvas">
    <div id="content" contenteditable="true" spellcheck="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
});
</script>

<style>
.Canvas {
  height: 100%;
  padding: 2rem 6rem;
  min-height: calc(100vh - 5rem);
}

#content {
  font-size: 1.5rem;
  min-height: calc(100vh - 9rem);
  width: 100%;
  font-family: var(--font-main);
  color: var(--gray-dark);
  caret-color: var(--theme-primary-50);
}

#content b {
  color: var(--theme-primary);
}

::selection {
  background: var(--theme-primary);
  color: var(--white);
}

#content:focus {
  outline: none;
}
</style>
