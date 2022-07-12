<script setup>
import { computed } from "vue";
import TheProductCard from "./TheProductCard.vue";

//const productsOrder = [5, 1, 3, 2, 4];

const props = defineProps({
  products: Object,
});

// const orderedProducts = computed(() => {
//   return productsOrder.map((productId) => {
//     return props.products.find((product) => productId === product.id);
//   });
// });
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
/* .productColumns {
    @apply columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5;
  } */
.productModule {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5;
  @apply gap-2 sm:gap-3 md:gap-4 2xl:gap-6;
}
</style>
