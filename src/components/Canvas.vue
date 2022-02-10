<template>
  <div class="Canvas">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      consequuntur eos veritatis dicta autem odit aliquid cumque ad, nostrum
      doloribus, officiis tenetur itaque quos voluptate voluptatibus beatae,
      iste sapiente accusamus!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      consequuntur eos veritatis dicta autem odit aliquid cumque ad, nostrum
      doloribus, officiis tenetur itaque quos voluptate voluptatibus beatae,
      iste sapiente accusamus!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
});
</script>

<style scoped>
.Canvas {
  height: 100%;
  padding: 6rem;
}

p {
  font-size: 1.5rem;
}
</style>
