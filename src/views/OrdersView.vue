<script>
export default {
  data() {
    return {
      orders: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(import.meta.env.VITE_API_HOST + "/orders");
      this.orders = await response.json();
    },
  },
};
</script>

<template>
  <main>{{ orders }}</main>
</template>
