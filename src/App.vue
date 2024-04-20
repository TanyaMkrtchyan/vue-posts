<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-center items-center w-full bg-no-repeat bg-cover bg-center h-44 lg:h-60 xl:h-72 2xl:h-82">
    <img class="logo w-40 sm:w-48 lg:w-56 xl:w-64 2xl:w-98" alt="logo" src="@/assets/logo.svg" />
  </header>

  <RouterView />
</template>

<style>

header {
  background-image: url("@/assets/header-bg.png");
}
</style>

