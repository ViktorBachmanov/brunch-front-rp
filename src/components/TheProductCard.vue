<script setup>
defineProps({
  name: String,
  price: Number,
});
</script>

<template>
  <div>
    <h3>{{ name }}</h3>
    {{ price }}
  </div>
</template>
