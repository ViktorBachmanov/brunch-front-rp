<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(import.meta.env.VITE_API_HOST + "/products");
      this.products = await response.json();
    },
  },
};
</script>

<template>
  <main>{{ products }}</main>
</template>
