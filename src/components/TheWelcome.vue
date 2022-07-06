<template>
  Данное клиент-серверное SPA приложение состоит из двух частей:
  <ul>
    <li>
      Vue 3.0 + Vue Router на хостинге Vercel (<a
        target="_blank"
        href="https://github.com/ViktorBachmanov/brunch-front-rp"
        >GitHub</a
      >)
    </li>
    <li>
      YII 2.0 RESTful API на хостинге Heroku (<a
        target="_blank"
        href="https://github.com/ViktorBachmanov/brunch-back"
        >GitHub</a
      >)
    </li>
  </ul>
  В качестве СУБД используется PostgreSQL со следующими таблицами:
  <img alt="db scheme" src="@/assets/db-2.png" />
</template>

<style scoped>
ul {
  margin: 1rem;
}

img {
  margin-top: 1rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
