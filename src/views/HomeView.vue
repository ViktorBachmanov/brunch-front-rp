<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { fetchData } from "../js/util";

// Wakeup Heroku
fetchData("users");
</script>

<template>
  <!-- <main> -->
  <TheWelcome />
  <!-- </main> -->
</template>
