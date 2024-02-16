<script>
import cartStore from '@/stores/cartStore';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(cartStore, ['cartItemNum']),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand text-primary" href="#">Vegetable Shop 前台</a>
      <button class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"
            @click.prevent="$router.push({name: 'login'})">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
            @click.prevent="$router.push({name: 'products'})">ProductList</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-cart4 me-1"></i>
              <span class="badge rounded-pill bg-danger">{{ cartItemNum }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
