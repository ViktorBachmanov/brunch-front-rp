<script setup>
import { fetchData } from "../js/util";
import TheProductTable from "../components/TheProductTable.vue";

const { loading, data, error } = fetchData("products");
</script>

<template>
  <main>
    <h3 v-if="loading">Loading...</h3>
    <!-- {{ products }} -->
    <h3 v-if="error"><span class="error">Ошибка: </span>{{ error }}</h3>

    <TheProductTable v-if="data" :products="data" />
  </main>
</template>
