<template>
  <div class="product-section">
    <div class="product-img"></div>
    <div class="product-detail">
      <span>{{ product.name }}</span>
      <span>{{ product.amount }}</span>
    </div>
  </div>
  <div class="shop-section">
    <div class="shop-logo">
      {{ shop.name }}
    </div>
    <div class="shop-info"></div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Toast } from "../utils/helpers";
import productsAPI from "./../apis/products";

export default {
  setup() {
    const product = ref({});
    const shop = ref({})
    const route = useRoute();
    const productId = route.params.productId;
    async function fetchProducts() {
      try {
        const response = await productsAPI.getProduct(productId);
        product.value = response.data.data.product;
        shop.value=response.data.data.product.Shop;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    }

    onMounted(() => {
      fetchProducts();
    });

    return { product, shop };
  },
};
</script>
<style>
.product-section {
  height: 842px;
  background: white;
  margin-top: 40px;
}
.shop-section {
  height: 132px;
  background: white;
  margin: 15px 0;
}
</style>