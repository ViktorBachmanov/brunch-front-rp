<script setup>
defineProps({
  name: String,
  price: Number,
  image: String,
  id: Number,
});

const apiHost = import.meta.env.VITE_API_HOST;
</script>

<template>
  <div class="card">
    <span class="productName">{{ name }}</span>
    <img :src="`${apiHost}/images/${image}`" alt="photo" />

    <span class="price">{{ price }} &#8381;</span>
  </div>
</template>

<style scoped>
.productName {
  @apply text-xs sm:text-sm md:text-base xl:text-lg;
}
.card {
  /* min-width: 300px; */
  max-width: 300px;
  /* page-break-inside: avoid; */
  /* position: relative; */
  /* margin-bottom: 0.5em; */
  padding: 0.5em 0;
  box-sizing: border-box;
  border-radius: 0.5em;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @apply shadow-lg;
}

.price {
  margin-right: 1em;
  align-self: flex-end;

  @apply text-xs sm:text-sm md:text-base xl:text-lg;
}

img {
  /* max-width: 90%; */
  margin: 0.5em 0;
}
</style>
