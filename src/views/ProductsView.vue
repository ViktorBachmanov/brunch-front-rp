<script setup>
import { fetchData } from "../js/util";

const { loading, data, error } = fetchData("products");
</script>

<template>
  <main>
    <h3 v-if="loading">Loading...</h3>
    <!-- {{ products }} -->
    <h3 v-if="error"><span class="error">Ошибка: </span>{{ error }}</h3>

    <table v-if="data">
      <thead>
        <tr>
          <th>ID</th>
          <th>Наименование</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in data" :key="product['id']">
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
