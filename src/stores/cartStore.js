import { defineStore } from 'pinia';
import axios from 'axios';

const CARTINFO_PATH = `${import.meta.env.VITE_APP_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`;

export default defineStore('cartStore', {
  state: () => ({
    cartInfo: [],
  }),
  actions: {
    getCartInfo() {
      axios.get(CARTINFO_PATH)
        .then((res) => {
          this.cartInfo = res.data.data;
          console.log(this.cartInfo);
        }).catch((e) => {
          console.log(e);
        });
    },
    addToCart({ id, qty = 1 }) {
      axios.post(CARTINFO_PATH, {
        data: {
          product_id: id,
          qty,
        },
      }).then(() => {
        this.getCartInfo();
      }).catch((e) => {
        console.log(e);
      });
    },
    setItemQty({ cartId, productId, qty }) {
      console.log(cartId, productId, qty);
      axios.put(`${CARTINFO_PATH}/${cartId}`, {
        data: {
          product_id: productId,
          qty,
        },
      }).then((res) => {
        console.log(res);
        this.getCartInfo();
      }).catch((e) => {
        console.log(e);
      });
    },
    removeItem(cartId) {
      axios.delete(`${CARTINFO_PATH}/${cartId}`)
        .then((res) => {
          console.log(res);
          this.getCartInfo();
        }).catch((e) => {
          console.log(e);
        });
    },
    removeAll() {
      console.log('www');
      axios.delete(`${CARTINFO_PATH}s`)
        .then((res) => {
          console.log(res);
          this.getCartInfo();
        }).catch((e) => {
          console.log(e);
        });
    },
  },
  getters: {
    cartItemNum({ cartInfo }) {
      return cartInfo.carts?.reduce((acc, cur) => acc + cur.qty, 0) || 0;
    },
  },
});
