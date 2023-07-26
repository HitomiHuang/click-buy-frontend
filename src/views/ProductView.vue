<template>
  <div class="product-section">
    <div class="product-img">
      <img :src="product.image" alt="" class="img" />
    </div>
    <div class="product-detail">
      <span class="product-name">{{ product.name }}</span>
      <div class="product-price">
        <span>${{ product.price }}</span>
      </div>
      <div class="amount-group">
        <span class="amount-label">數量</span>
        <table class="mx-3">
          <tr>
            <td>
              <span class="minus-btn" @click.prevent.stop="minusAmount">-</span>
            </td>
            <td><input type="text" class="amount-input" v-model="amount" /></td>
            <td>
              <span class="plus-btn" @click.prevent.stop="plusAmount">+</span>
            </td>
          </tr>
        </table>
        <span class="rest-amount-label">還剩下{{ product.restAmount }}件</span>
      </div>
      <button
        class="btn btn-primary add-to-cart mt-5"
        @click.prevent.stop="addToCart"
      >
        加入購物車
      </button>
    </div>
  </div>
  <div class="shop-section">
    <div>
      <div class="shop-logo">
        <img :src="shop.logo" alt="">
      </div>
      <div class="shop-info">
        {{ shop.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Toast } from "../utils/helpers";
import productsAPI from "./../apis/products";
import cartsAPI from "./../apis/carts";

export default {
  setup() {
    const product = ref({});
    const shop = ref({});
    const amount = ref(1);
    const route = useRoute();
    const productId = route.params.productId;

    async function fetchProducts() {
      try {
        const response = await productsAPI.getProduct(productId);
        product.value = response.data.data.product;
        shop.value = response.data.data.product.Shop;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取得商品資料，請稍後再試",
        });
      }
    }

    const addToCart = async () => {
      try {
        await cartsAPI.addToCart(productId, amount);

        Toast.fire({
          icon: "success",
          title: "成功加入購物車",
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "加入購物車失敗，請稍後再試",
        });
      }
    };

    const plusAmount = () => {
      if (product.value.restAmount > amount.value) {
        amount.value = Number(amount.value) + 1;
      }
    };

    const minusAmount = () => {
      if (amount.value > 1) {
        amount.value = Number(amount.value) - 1;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return { product, shop, addToCart, amount, plusAmount, minusAmount };
  },
};
</script>
<style scoped>
.product-section {
  height: 842px;
  background: white;
  margin-top: 40px;
  display: flex;
}
.shop-section {
  height: 160px;
  padding: 10px;
  background: white;
  margin: 15px 0;
}
.product-img {
  padding: 10px;
  position: relative;
  flex: 1;
}
.product-detail {
  padding: 10px 30px;
  flex: 1;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.product-name {
  font-size: 30px;
}
.product-price {
  background: #fafafa;
  margin-top: 50px;
  height: 70px;
  padding: 10px;
}
.product-price span {
  font-size: 36px;
  color: #d0011b;
}
.add-to-cart {
  display: block;
}
td,
tr {
  border: 1px solid #eaeaeaff;
}
.amount-input {
  width: 50px;
  border: none;
  text-align: center;
}
.plus-btn,
.minus-btn {
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  width: 25px;
  cursor: pointer;
}
.amount-label{
  font-size: 20px;
}
.amount-group {
  display: flex;
  margin-top: 80px;
  align-items: center;
}
.rest-amount-label{
  color: rgb(184, 183, 183);
}
</style>