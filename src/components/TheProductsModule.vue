<script setup>
import TheProductCard from "./TheProductCard.vue";

defineProps({
  products: Object,
});
</script>

<template>
  <TheProductCard
    v-for="product in products"
    :name="product.name"
    :price="product.price"
  />
</template>
