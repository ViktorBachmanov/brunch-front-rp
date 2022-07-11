<script setup>
import { computed } from "vue";
import TheProductCard from "./TheProductCard.vue";

const productsOrder = [5, 1, 3, 2, 4];

const props = defineProps({
  products: Object,
});

const orderedProducts = computed(() => {
  return productsOrder.map((productId) => {
    return props.products.find((product) => productId === product.id);
  });
});
</script>

<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
    <TheProductCard
      v-for="product in orderedProducts"
      :name="product.name"
      :price="product.price"
      :image="product.image"
      :id="product.id"
    />
  </div>
</template>
