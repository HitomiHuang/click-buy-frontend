<template>
  <div class="search-block">
    <div class="logo"></div>
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="請輸入關鍵字">
      <button class=" btn btn-primary search-btn"><i class="fa-solid fa-magnifying-glass d-block"></i></button>
    </div>
    <div class="cart">
      <a href="#"><i class="fa-solid fa-cart-shopping fa-xl d-block"></i></a>    
    </div>
  </div>
</template>
<script>
</script>
<style>
.search-block{
  height: 85px;
  background: transparent;
  display: flex;
  align-items: center;
}
.logo{
  flex:2;
  background-image: url('../assets/click-buy-logo-3.png');
  width: 162px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
}
.search-bar{
  flex:8;
  position: relative;
}
.search-input{
  width:100%;
  padding: 3px 73px 3px 10px;
  height: 40px;
  border: none;
  border-radius: 3px;
}
.search-btn{
  width: 60px;
  height: 34px;
  position: absolute;
  right:3px;
  top: 3px;
  border-radius: 3px;
  padding-bottom: 5px;
  background: #FB5533;
}
.cart{
  flex:1;
  display: flex;
  justify-content: center;
  color:white;
  cursor: pointer;
}

</style>