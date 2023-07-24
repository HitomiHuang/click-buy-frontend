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
      <div>
        <span>數量</span>
        <button>-</button>
        <input type="text" class="amount-input" :value="amount">
        <button>+</button>
        <span>還剩下{{ product.amount }}件</span>
        <button class="btn btn-primary add-to-cart" @click.prevent.stop="addToCart">加入購物車</button>
      </div>
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
import { onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import { Toast } from "../utils/helpers";
import productsAPI from "./../apis/products";
import cartsAPI from "./../apis/carts"

export default {
  setup() {
    const product = ref({});
    const shop = ref({});
    const amount = 1;
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
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    }

    const addToCart = async() => {
      try{
        
        const response = await cartsAPI.addToCart(productId, amount);
        console.log(response)
      }catch(err){
        Toast.fire({
          icon: "error",
          title: "加入購物車失敗，請稍後再試",
        });
      }
    }

    onMounted(() => {
      fetchProducts();
    });

    return { product, shop, addToCart, amount };
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
  height: 132px;
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
  object-fit:cover;
  object-position: 50% 50%;
}
.product-name{
  font-size: 30px;
}
.product-price{
  background: #FAFAFA;
  margin-top: 50px;
  height: 70px;
  padding: 10px;
}
.product-price span{
  font-size: 36px;
  color:#D0011B
}
.add-to-cart{
  display:block;
}
</style>