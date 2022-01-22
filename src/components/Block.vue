<template>
  <div class="Block">
    <select @change="onSelect($event)">
      <option v-for="(suggestion, i) in suggestions" :key="i" :value="i">
        {{ suggestion.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Block",
  props: ["block", "suggestions", "id", "key"],
  methods: {
    onSelect(event: InputEvent) {
      this.$emit("on-select", {
        id: this.id,
        selection: (event.target as HTMLSelectElement).value,
      });
    },
  },
});
</script>
