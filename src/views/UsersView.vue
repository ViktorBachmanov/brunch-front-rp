<script>
export default {
  data() {
    return {
      users: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(import.meta.env.VITE_API_HOST + "/users");
      this.users = await response.json();
    },
  },
};
</script>

<template>
  <main>{{ users }}</main>
</template>
