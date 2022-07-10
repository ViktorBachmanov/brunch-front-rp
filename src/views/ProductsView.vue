<script setup>
import { fetchData } from "../js/util";
import TheProductsTable from "../components/TheProductsTable.vue";
import TheProductsModule from "../components/TheProductsModule.vue";

const { loading, data, error } = fetchData("products");
</script>

<template>
  <main>
    <h3 v-if="loading">Loading...</h3>
    <!-- {{ products }} -->
    <h3 v-if="error"><span class="error">Ошибка: </span>{{ error }}</h3>

    <!-- <TheProductsTable v-if="data" :products="data" /> -->
    <TheProductsModule v-if="data" :products="data" />
  </main>
</template>
