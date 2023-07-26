<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="check-box"></th>
          <th class="product-info">商品</th>
          <th class="product-price">單價</th>
          <th class="product-amount">數量</th>
          <th class="total-count">總計</th>
          <th class="action">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in carts" :key="product.productId">
          <td class="check-box">
            <input
              type="checkbox"
              :id="product.productId"
              :value="product.productId"
              v-model="checkedProducts"
            />
          </td>
          <td class="product-info">
            <div class="product-img">
              <img :src="product.Product.image" alt="" />
            </div>
            <div class="product-des">
              {{ product.Product.name }}
            </div>
          </td>
          <td class="product-price">${{ product.Product.price }}</td>
          <td class="product-amount">{{ product.amount }}</td>
          <td class="total-count">
            ${{ product.Product.price * product.amount }}
          </td>
          <td class="action">
            <button type="button" class="btn btn-danger">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="totalBlock">
      <button class="btn btn-primary" @click.prevent.stop="buyProducts">
        確認購買
      </button>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
import { Toast } from "../utils/helpers";
import cartAPI from "./../apis/carts";

export default {
  setup() {
    const carts = ref([]);
    const checkedProducts = ref([]);

    const fetchCart = async () => {
      const response = await cartAPI.getCart();
      carts.value = response.data.data.carts;
    };

    const buyProducts = async () => {
      try{
        const buyContent = []
        for(let i in carts.value){
          let product = carts.value[i]
          for(let j in checkedProducts.value){
            let checkedProduct = checkedProducts.value[j]
            if(product.productId === checkedProduct){
              buyContent.push(product)
            }
          }
        }
    
        await cartAPI.buyProducts(buyContent);

        Toast.fire({
          icon: "success",
          title: "購買成功",
        });
      }catch(err){
        Toast.fire({
          icon: "error",
          title: "購買失敗，請稍後再試",
        });
      }
    };

    onMounted(() => {
      fetchCart();
    });

    return { carts, checkedProducts, buyProducts };
  },
};
</script>
<style scoped>
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
}
.product-img {
  padding: 10px;
}
</style>