<template>
  <HeaderTop v-model:inputText="searchText" @search="searchProducts" />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import HeaderTop from "@/components/HeaderTop.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    HeaderTop,
  },
  setup() {
    const searchText = ref("");
    const router = useRouter();

    const searchProducts = () => {
      router.push({ path: "/search", query: { keyword: searchText.value } });
    };

    return { searchText, searchProducts };
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
body {
  min-width: 1220px;
  background: #f5f5f5;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
a{
  text-decoration: none;
}
</style>

