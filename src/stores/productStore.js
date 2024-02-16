import { defineStore } from 'pinia';

export default defineStore('productStore', {
  actions: {
    getProducts() {
      this.axios.get(this.PRODUCTLIST_PATH)
        .then((res) => {
          this.products = res.data.products;
          console.log(this.products);
        }).catch((e) => {
          console.log(e);
        });
    },
  },
});
