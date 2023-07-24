<template>
  <div class="product-filter">
    <span>篩選</span>
    <div class="filter-type">
      <button class="button">最新</button>
      <button class="button">最熱銷</button>
      <select name="priceOrder" id="priceOrder">
        <option value="" selected hidden>價格</option>
        <option value="1">價格：低到高</option>
        <option value="2">價格：高到低</option>
      </select>
    </div>
  </div>
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
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import productsAPI from "../apis/products";

const router = useRoute();
const keyword = router.query.keyword;
const products = ref([]);

const fetchProducts = async () => {
  const response = await productsAPI.searchProducts(keyword);
  products.value = response.data.data.products
};
onMounted(() => {
  fetchProducts();
});
</script>
<style scoped>
.product-filter {
  margin-top: 40px;
  width: 100%;
  height: 75px;
  background: #ededed;
  border-bottom: 10px solid #f5f5f5;
  border-collapse: collapse;
  padding: 13px 20px;
  display: flex;
  align-items: center;
}
.filter-type {
  margin-left: 15px;
  display: flex;
  align-items: center;
}
.button {
  height: 34px;
  width: 90px;
  margin-right: 10px;
}
select {
  height: 34px;
  width: 200px;
}
.card-wrapper {
  margin: 0 0;
  display: grid;
  justify-content: center;
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