<script>
export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.users = this.error = null;

      let response;

      try {
        response = await fetch(import.meta.env.VITE_API_HOST + "/users");
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }

      this.users = await response.json();
    },
  },
};
</script>

<template>
  <main>
    <h3 v-if="loading">Loading...</h3>
    <!-- {{ users }} -->
    <h3 v-if="error"><span class="error">Ошибка: </span>{{ error }}</h3>

    <table v-if="users">
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
        <tr v-for="user in users" :key="user['id']">
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
  </main>
</template>

<style scoped>
td {
  text-align: left;
}
</style>
