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
  padding: 1rem 6rem;
  background: var(--white);
  box-shadow: var(--smooth-shadow);
}

h1 {
  font-size: 1.8rem;
  color: var(--theme-primary);
  font-family: var(--font-heading);
}
</style>
