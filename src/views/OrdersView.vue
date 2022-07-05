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
  computed: {
    priceTotal() {
      let sum = 0;
      this.orders.forEach((order) => {
        order["products"].forEach((product) => {
          sum += product["sum"];
        });
      });
      return sum;
    },
  },
};
</script>

<template>
  <main>
    <h3 v-if="!orders">Loading...</h3>
    {{ orders }}
    <table v-if="orders">
      <thead>
        <tr>
          <th>&#8470;</th>
          <th>ID клиента</th>
          <th>Продукт</th>
          <th>Кол.</th>
          <th>Итого</th>
        </tr>
      </thead>
      <tbody v-for="order in orders" :key="order['id']">
        <tr
          v-for="(product, index) in order['products']"
          :key="order['products']['name']"
        >
          <td :rowspan="order['products'].length" v-if="index === 0">
            {{ order["id"] }}
          </td>
          <td :rowspan="order['products'].length" v-if="index === 0">
            {{ order["userId"] }}
          </td>
          <td :style="{ textAlign: 'left' }">
            {{ order["products"][index]["name"] }}
          </td>
          <td>
            {{ order["products"][index]["quantity"] }}
          </td>
          <td>{{ order["products"][index]["sum"] }}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td colspan="4"></td>
          <td>{{ priceTotal }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
