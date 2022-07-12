<script setup>
import { fetchData } from "../js/util";

const { loading, data, error } = fetchData("orders");
</script>

<template>
  <!-- <main> -->
  <h3 v-if="loading">Loading...</h3>
  <!-- {{ orders }} -->
  <h3 v-if="error"><span class="error">Ошибка: </span>{{ error }}</h3>

  <table v-if="data">
    <thead>
      <tr>
        <th>&#8470;</th>
        <th>ID клиента</th>
        <th>Продукт</th>
        <th>Кол.</th>
        <th>Сумма</th>
      </tr>
    </thead>
    <tbody v-for="order in data" :key="order['id']">
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
        <td :rowspan="order['products'].length" v-if="index === 0">
          {{ order["sum"] }}
        </td>
      </tr>
    </tbody>
  </table>
  <!-- </main> -->
</template>
