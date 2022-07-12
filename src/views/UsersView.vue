<script setup>
import { fetchData } from "../js/util";

const { loading, data, error } = fetchData("users");
</script>

<template>
  <!-- <main> -->
  <h3 v-if="loading">Loading...</h3>
  <!-- {{ users }} -->
  <h3 v-if="error"><span class="error">Ошибка: </span>{{ error }}</h3>

  <div class="wrapper">
    <table v-if="data">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Пароль</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user['id']">
          <td :style="{ textAlign: 'center' }">
            {{ user["id"] }}
          </td>
          <td>
            {{ user["email"] }}
          </td>
          <td>
            {{ user["name"] }}
          </td>
          <td>
            {{ user["tel"] }}
          </td>
          <td>
            {{ "..." + user["password"]?.slice(-7) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- </main> -->
</template>

<style scoped>
td {
  text-align: left;
}

.wrapper {
  max-width: calc(100% - 2rem);
  overflow-x: auto;
}
</style>
