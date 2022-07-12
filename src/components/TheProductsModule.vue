<script setup>
import { computed } from "vue";
import TheProductCard from "./TheProductCard.vue";

const props = defineProps({
  products: Object,
});
</script>

<template>
  <div class="productModule">
    <TheProductCard
      v-for="product in products"
      :name="product.name"
      :price="product.price"
      :image="product.image"
    />
  </div>
</template>

<style scoped>
.productModule {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5;
  @apply gap-2 sm:gap-3 md:gap-4 2xl:gap-6;
}
</style>
