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
    <img :src="`${apiHost}/images/${image}`" alt="photo" />
    <div class="text">
      <h3>{{ name }}</h3>
      {{ price }}
      {{ id }}
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 300px;
  max-width: 300px;
  page-break-inside: avoid;
  position: relative;
}

img {
  max-width: 100%;
}

.text {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
