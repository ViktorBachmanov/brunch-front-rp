<script setup>
defineProps({
  name: String,
  price: Number,
  image: String,
});

const apiHost = import.meta.env.VITE_API_HOST;
</script>

<template>
  <div class="card">
    <h3>{{ name }}</h3>
    {{ price }}
    <img :src="`${apiHost}/images/${image}`" alt="photo" />
  </div>
</template>

<style scoped>
.card {
  max-width: 300px;
}

img {
  max-width: 100%;
}
</style>
