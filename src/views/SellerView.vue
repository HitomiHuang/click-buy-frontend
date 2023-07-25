<template>
  <div class="wrapper">
    <router-link to="/seller/addProduct">
      <button type="button" class="btn btn-primary">上架商品</button>
    </router-link>

    <h3 class="mt-5">商品列表</h3>
    <table>
      <thead>
        <tr>
          <th class="check-box">#</th>
          <th class="product-info">商品</th>
          <th class="product-price">單價</th>
          <th class="product-amount">剩餘數量</th>
          <th class="total-count">賣出數量</th>
          <th class="action">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td class="check-box">
            {{ index + 1 }}
          </td>
          <td class="product-info">
            <div class="product-img">
              <img :src="product.image" alt="" />
            </div>
            <div class="product-des">
              {{ product.name }}
            </div>
          </td>
          <td class="product-price">${{ product.price }}</td>
          <td class="product-amount">{{ product.restAmount }}</td>
          <td class="total-count">
            {{ product.totalAmount - product.restAmount }}
          </td>
          <td class="action">
            <router-link
              :to="{ name: 'edit-product', params: { productId: product.id } }"
              >
                編輯
              </router-link>
            <div class="off-product mt-3" @click.stop.prevent="offProduct(product.id)">下架</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Toast } from "../utils/helpers";
import productsAPI from "./../apis/products";

export default {
  setup() {
    const products = ref([]);
    const fetchProducts = async () => {
      try {
        const response = await productsAPI.getProductsByShop();
        products.value = response.data.data.products;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法取得商品資料，請稍後再試",
        });
      }
    };

    const offProduct = async(productId) => {
      try{
        const product = {id: productId, status: 'disable'}
        await productsAPI.editProduct(product)
      }catch(err){
        Toast.fire({
          icon: "error",
          title: "下架失敗，請稍後再試",
        });
      }
    }

    onMounted(() => {
      fetchProducts();
    });

    return { products, offProduct };
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  margin-top: 40px;
}
table {
  margin-top: 40px;
  width: 100%;
}
th,
td {
  text-align: center;
}
thead {
  line-height: 40px;
  background: white;
  border-bottom: 10px solid #f5f5f5;
  border-collapse: collapse;
}
tbody {
  line-height: 200px;
  background: white;
  border-bottom: 10px solid #f5f5f5;
}
tr {
  display: flex;
}
.check-box {
  flex: 1;
}
.product-info {
  display: flex;
  flex: 8;
}
.product-amount {
  flex: 2;
}
.action {
  flex: 2;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}
.product-img {
  padding: 10px;
}
.btn {
  width: 100px;
}
.off-product{
  color:red;
  cursor:pointer;
}
</style>