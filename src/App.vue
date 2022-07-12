<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/users">Клиенты</RouterLink>
        <RouterLink to="/products">Продукты</RouterLink>
        <RouterLink to="/orders">Заказы</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;

  @apply py-2 sm:py-3 md:py-4 2xl:py-6;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;

  @apply text-sm xl:text-base;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  max-width: 100%;
}
</style>
