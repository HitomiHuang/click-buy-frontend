<template>
  <form @submit.stop.prevent="handleSubmit" class="mt-5">
    <div class="form-group">
      <label for="name">商品名稱</label>
      <input
        id="name"
        v-model="product.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="輸入商品名稱"
        required
      />
    </div>

    <div class="form-group mt-3">
      <label for="desc">商品描述</label>
      <input
        id="desc"
        v-model="product.desc"
        type="text"
        class="form-control"
        name="desc"
        placeholder="輸入商品描述"
      />
    </div>

    <div class="form-group mt-3">
      <label for="price">商品單價</label>
      <input
        id="price"
        v-model="product.price"
        type="text"
        class="form-control"
        name="price"
        placeholder="輸入商品單價"
        required
      />
    </div>

    <div class="form-group mt-3">
      <label for="totalAmount">商品數量</label>
      <input
        id="totalAmount"
        v-model="product.totalAmount"
        type="text"
        class="form-control"
        name="totalAmount"
        placeholder="輸入商品數量"
        required
      />
    </div>

    <div class="form-group mt-3">
      <label for="image">Image</label>
      <div>
        <img
          v-if="product.image"
          :src="product.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
      </div>
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>
    <button type="submit" class="btn btn-primary mt-3">送出</button>
  </form>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import productsAPI from "./../apis/products";

export default {
  setup() {
    const product = ref({
      name: "",
      desc: "",
      price: 0,
      totalAmount: 0,
      image: "",
    });

    const route = useRoute();
    const productId = route.params.productId;

    const fetchProduct = async () => {
      const response = await productsAPI.getProduct(productId);
      product.value = response.data.data.product;
    };

    const handleFileChange = (e) => {
      const { files } = e.target;

      if (files.length === 0) {
        product.value.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        product.value.image = imageURL;
      }
    };

    const handleSubmit = async (e) => {
      const form = e.target;
      const formData = new FormData(form);
      formData.append("id", productId);
      await productsAPI.editProduct(formData);
    };

    onMounted(() => {
      fetchProduct();
    });

    return { product, handleFileChange, handleSubmit };
  },
};
</script>