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
  <main>
    <h3 v-if="!users">Loading...</h3>
    {{ users }}
    <table v-if="users">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Имя</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user['id']">
          <td>
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
        </tr>
      </tbody>
    </table>
  </main>
</template>
