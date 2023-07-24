<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="check-box"><input type="checkbox" /></th>
          <th class="product-info">商品</th>
          <th class="product-amount">數量</th>
          <th class="action">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="check-box"><input type="checkbox" /></td>
          <td class="product-info">productName</td>
          <td class="product-amount">1</td>
          <td class="action">
            <button type="button" class="btn btn-danger">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
// import { Toast } from "../utils/helpers";
// import cartAPI from "./../apis/carts";

export default {
  setup() {
    // const cart = ref([]);
    // async function fetchCart() {
    //   cart.value = await cartAPI.getCart();
    // }
  },
};
</script>
<style>
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
  flex: 8;
}
.product-amount {
  flex: 2;
}
.action {
  flex: 2;
}
</style>