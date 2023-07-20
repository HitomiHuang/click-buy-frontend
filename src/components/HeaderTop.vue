<template>
  <header class="top">
    <div class="wrapper">
      <NavBar/>
      <SearchBar/>
    </div>
  </header>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import SearchBar from './SearchBar.vue';

export default{
  components: {
    NavBar,
    SearchBar
  }
}
</script>
<style>
.top{
  height: 119px;
  background: linear-gradient(-180deg,#f53d2d,#f63);
}
.wrapper{
  max-width:1200px;
  margin: 0 auto;
}
</style>