<script>
export default {
  props: ['cartInfo'],
};
</script>

<template>
  <div class="container py-4" v-if="cartInfo.carts?.length">
    <div class="d-flex justify-content-between align-items-baseline pe-3 mb-3">
      <h1>購物車清單</h1>
      <button type="button" class="btn btn-primary" @click="$emit('removeAll')">移除所有品項</button>
    </div>
    <table class="table table-hover align-middle">
      <thead>
        <tr class="text-center">
          <th>品名</th>
          <th>圖片</th>
          <th>數量</th>
          <th>單位</th>
          <th class="text-end">單價</th>
          <th class="text-end">小計</th>
          <th>移除品項</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="cartItem in cartInfo.carts" :key="cartItem.id">
          <td>
            {{ cartItem.product.title }}
          </td>
          <td>
            <img :src="cartItem.product.imageUrl"
            :alt="cartItem.product.title"
            style="height: 100px; width:200px; object-fit: cover;">
          </td>
          <td>
            <select class="form-select"
              :value="cartItem.qty"
              @change="$emit('setItemQty',
                {cartId: cartItem.id,
                productId: cartItem.product.id,
                qty: Number($event.target.value)})">
              <option v-for="i in 10" :key="'cartItemQty' + i">{{ i }}</option>
            </select>
          </td>
          <td>
            {{ cartItem.product.unit }}
          </td>
          <td class="text-end">
            {{ cartItem.product.price }}
          </td>
          <td class="text-end">
            {{ cartItem.qty * cartItem.product.price }}
          </td>
          <td>
            <button type="button"
              class="btn"
              @click.prevent="$emit('removeItem', cartItem.id )">
              <i class="bi bi-trash3"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="text-end px-4">{{ `總金額 NT$ ${cartInfo.final_total}` }}</p>
  </div>
</template>
