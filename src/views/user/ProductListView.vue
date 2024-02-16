<script>
import ProductCard from '@/components/user/ProductCard.vue';
import CartList from '@/components/user/CartList.vue';
import cartStore from '@/stores/cartStore';
import { mapState, mapActions } from 'pinia';

export default {
  data() {
    return {
      PRODUCTLIST_PATH: `${import.meta.env.VITE_APP_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/products/all`,
      products: [],
    };
  },
  components: {
    CartList,
    ProductCard,
  },
  methods: {
    getProducts() {
      this.axios.get(this.PRODUCTLIST_PATH)
        .then((res) => {
          this.products = [...res.data.products];
          console.log(this.products);
        }).catch((e) => {
          console.log(e);
        });
    },
    ...mapActions(cartStore, ['getCartInfo', 'addToCart', 'removeItem', 'removeAll', 'setItemQty']),
  },
  computed: {
    ...mapState(cartStore, ['cartInfo']),
  },
  created() {
    this.getProducts();
    this.getCartInfo();
  },
};
</script>

<template>
  <CartList :cart-info="cartInfo"
    @remove-item="removeItem"
    @remove-all="removeAll"
    @set-item-qty="setItemQty" />
  <div class="container py-4">
    <h1 class="mb-3">產品列表</h1>
    <div class="row row-cols-2 row-cols-md-4 g-4" v-if="products.length">
      <div class="col" v-for="productInfo in products" :key="productInfo.id">
        <ProductCard :product-info="productInfo" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>
