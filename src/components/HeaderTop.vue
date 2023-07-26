<template>
  <header class="top">
    <div class="wrapper">
      <nav>
        <div class="nav-items left">
          <template v-if="role==='seller'">
            <router-link :to="{ name: 'seller', params: { shopId } }"
              >賣家中心</router-link
            >
            <div class="line"></div>
          </template>
          <a href="#">追蹤我們</a>
        </div>
        <div class="nav-items right">
          <a href="#">幫助中心</a>
          <template v-if="!isAuthenticated">
            <a href="#" class="nav-item">註冊</a>
            <div class="line"></div>
            <router-link to="/login">登入</router-link>
          </template>
          <template v-else>
            <div class="line"></div>
            <a href="#">
              <img :src="userImage" alt="" />
              <span>{{ userName }}, 你好</span>
            </a>
            <div class="line"></div>
            <a href="#" @click="logout">登出</a>
          </template>
        </div>
      </nav>
      <div class="search-block">
        <router-link to="/products" class="logo"></router-link>
        <div class="search-bar">
          <input
            type="text"
            class="search-input"
            placeholder="請輸入關鍵字"
            v-model="keyword"
          />
          <button
            class="btn btn-primary search-btn"
            @click.prevent.stop="searchProducts"
          >
            <i class="fa-solid fa-magnifying-glass d-block"></i>
          </button>
        </div>
        <div class="cart" v-if="role==='buyer'">
          <router-link to="/cart"
            ><i class="fa-solid fa-cart-shopping fa-xl d-block"></i
          ></router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: {
    inputText: {
      type: String,
      default: "",
    },
  },
  emits: ["update:inputText", "search"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter()

    const keyword = computed({
      get: () => props.inputText,
      set: (val) => emit("update:inputText", val),
    });

    const searchProducts = () => {
      emit("search");
    };

    const logout = () => {
      localStorage.removeItem('token')
      router.push({path:'/login'})
    }

    return {
      keyword,
      searchProducts,
      logout,
      userImage: computed(() => store.state.currentUser.avatar),
      userName: computed(() => store.state.currentUser.name),
      role: computed(() => store.state.currentUser.role),
      shopId: computed(() => store.state.currentUser.shopId),
      isAuthenticated: computed(() => store.state.isAuthenticated),
    };
  },
};
</script>
<style scoped>
.top {
  height: 119px;
  background: linear-gradient(-180deg, #f53d2d, #f63);
}

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
  display: flex;
  align-items: center;
}
.nav-item {
  margin-left: 12px;
}
.line {
  width: 2px;
  height: 15px;
  background: #f86c5c;
  margin: 0px 10px;
  display: inline-block;
}
.left {
  width: 30%;
}
.search-block {
  height: 85px;
  background: transparent;
  display: flex;
  align-items: center;
}
.logo {
  flex: 2;
  background-image: url("../assets/click-buy-logo-3.png");
  width: 162px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
}
.search-bar {
  flex: 8;
  position: relative;
}
.search-input {
  width: 100%;
  padding: 3px 73px 3px 10px;
  height: 40px;
  border: none;
  border-radius: 3px;
}
.search-btn {
  width: 60px;
  height: 34px;
  position: absolute;
  right: 3px;
  top: 3px;
  border-radius: 3px;
  padding-bottom: 5px;
  background: #fb5533;
}
.cart {
  flex: 1;
  display: flex;
  justify-content: center;
  color: white;
  cursor: pointer;
}
.cart:hover {
  transform: scale(1.2, 1.2);
}
</style>