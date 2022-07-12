<script setup>
const apiHost = import.meta.env.VITE_API_HOST;
</script>

<template>
  <div class="desc">
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
  </div>

  <div class="db-pics">
    <img :src="`${apiHost}/images/db_user.png`" alt="db_user" />
    <img :src="`${apiHost}/images/db_product.png`" alt="db_product" />
    <img :src="`${apiHost}/images/db_order.png`" alt="db_order" />
  </div>
</template>

<style scoped>
.desc {
  padding: 1em;
}

ul {
  margin: 1rem;
}

.db-pics {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
  @apply gap-2 sm:gap-3 md:gap-4 2xl:gap-6;
  @apply mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8;
}

img {
  margin: 1em;
  @apply shadow-lg;
}
</style>
