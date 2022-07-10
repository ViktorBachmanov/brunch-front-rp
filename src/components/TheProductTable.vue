<script setup>
defineProps({
  products: Object,
});
</script>

<template>
  <table>
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
</template>
