<template>
  <div class="card-wrapper">
    <router-link
      v-for="product in products"
      :key="product.id"
      class="card"
      :to="{ name: 'product', params: { productId: product.id } }"
    >
      <img :src="product.image" class="card-image" alt="" />
      <div class="card-body">
        <div class="product-name">
          <span class="card-text">{{ product.name }}</span>
        </div>
        <div class="product-discount"></div>
        <div class="product-price">
          <span class="card-text price"
            ><span class="money">$</span>{{ product.price }}</span
          >
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Toast } from "../utils/helpers";
import productsAPI from "./../apis/products";

export default {
  setup() {
    const products = ref([]);

    async function fetchProducts() {
      try {
        const response = await productsAPI.getProducts();
        products.value = response.data.data.products;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取得商品資料，請稍後再試",
        });
      }
    }
    onMounted(fetchProducts);
    return { products };
  }
};
</script> 
<style>
.card-wrapper {
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(6, 190px);
  gap: 10px 10px;
}
.card {
  width: 190px;
  height: 380px;
  border-radius: 3px;
}
.card-image {
  height: 210px;
}
.card-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-text {
  line-height: normal;
  display: block;
}
.money {
  font-size: 1px;
}
.price {
  color: red;
  font-size: 18px;
}
</style>