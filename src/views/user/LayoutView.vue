<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/user/NavBar.vue';
</script>

<template>
  <div style="min-height: 100vh;" class="d-flex flex-column">
    <NavBar />
    <div class="flex-fill d-flex flex-column">
      <RouterView />
    </div>
    <div class="bg-secondary bg-opacity-25">
      <div class="container py-4">
        <p class="m-0 text-center text-primary">© 2024~∞ - VegetableShop</p>
      </div>
    </div>
  </div>
</template>
