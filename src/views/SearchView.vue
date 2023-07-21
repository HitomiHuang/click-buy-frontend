<template>
  <div class="product-filter"></div>
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
import { ref } from "vue";
const products = ref([])
</script>
<style>
.product-filter{
  margin-top: 40px;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 10px solid #f5f5f5;
  border-collapse: collapse;
}
</style>