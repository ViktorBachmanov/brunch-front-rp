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
    <h3>{{ name }}</h3>
    <img :src="`${apiHost}/images/${image}`" alt="photo" />

    <span class="text-sm md:text-base">{{ price }} &#8381;</span>
  </div>
</template>

<style scoped>
.card {
  min-width: 300px;
  max-width: 300px;
  page-break-inside: avoid;
  position: relative;
  margin-bottom: 0.5em;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 1em;
  background-color: white;

  @apply shadow-lg;
}

img {
  /* max-width: 90%; */
}
</style>
