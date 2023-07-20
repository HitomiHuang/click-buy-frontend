<template>
  <nav>
    <div class="nav-items left">
      <a href="#">賣家中心</a>
      <div class="line"></div>
      <a href="#">追蹤我們</a>
    </div>
    <div class="nav-items right">
      <a href="#">幫助中心</a>
      <a href="#" class="nav-item">註冊</a>
      <div class="line"></div>
      <a href="#">登入</a>
      <!-- <a href="#" class="nav-item">
        <img src="#" alt="">
        <span>userName</span>
      </a> -->
    </div>
  </nav>
</template>
<script>
</script>
<style>
nav {
  height: 34px;
  background: transparent;
  display: flex;
  justify-content: space-between;
}
a {
  line-height: 34px;
  text-decoration: none;
  color: white;
}
ul {
  list-style: none;
  display: flex;
}
.nav-items {
  display:flex;
  align-items: center;

}
.nav-item{
  margin-left:12px;
}
.line {
  width: 2px;
  height: 15px;
  background: #F86C5C;
  margin: 0px 10px;
  display: inline-block;
}
.left{
  width: 30%;
}
</style>