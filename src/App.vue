<template>
  <HeaderTop/>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import HeaderTop from "@/components/HeaderTop.vue";

export default {
  name: "App",
  components: {
    HeaderTop
  }
};
</script>
<style>
body{
  min-width:1220px;
  background: #F5F5F5;
}
.wrapper{
  max-width: 1200px;
}
</style>

