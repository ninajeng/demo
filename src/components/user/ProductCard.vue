<script>
export default {
  props: ['productInfo'],
};
</script>

<template>
  <div class="card h-100">
    <img :src="productInfo.imageUrl"
    class="card-img-top"
    :alt="productInfo.title"
    style="height: 200px; object-fit: cover;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ productInfo.title }}</h5>
      <div class="mt-auto">
        <p class="card-text">{{ `NT$ ${productInfo.price}` }}</p>
        <a href="#"
          class="btn btn-primary"
          @click.prevent="$emit('addToCart', { id: productInfo.id, qty: 1 })">
          加入購物車
        </a>
      </div>
    </div>
  </div>
</template>
