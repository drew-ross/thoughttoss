<template>
  <div class="Block">{{ block }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Block",
  props: ["block"],
});
</script>
