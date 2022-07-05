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
  <main>
    <h3 v-if="!products">Loading...</h3>
    {{ products }}
    <table v-if="products">
      <thead>
        <tr>
          <th>ID</th>
          <th>Наименование</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product['id']">
          <td>
            {{ product["id"] }}
          </td>
          <td :style="{ textAlign: 'left' }">
            {{ product["name"] }}
          </td>
          <td>
            {{ product["price"] }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
