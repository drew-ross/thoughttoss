<template>
  <header class="Header">
    <h1>thoughttoss</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
.Header {
  width: 100%;
  height: 5rem;
  padding: 0 6rem;
  background: var(--white);
  box-shadow: var(--smooth-shadow);
  display: flex;
  align-items: center;
}

h1 {
  font-size: 1.8rem;
  color: var(--theme-primary);
  font-family: var(--font-heading);
  pointer-events: none;
}
</style>
