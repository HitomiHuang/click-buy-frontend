<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">email</label>
        <input
          v-model="account"
          id="account"
          name="account"
          type="account"
          class="form-control"
          placeholder="Account"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disable="isProcessing"
      >
        Submit
      </button>

      <!-- <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div> -->

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>
<script setup>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const account = ref("");
const password = ref("");
const isProcessing = ref(false);
const router = useRouter();
const store = useStore();

async function handleSubmit() {
  try {
    if (!account.value?.trim() || !password.value?.trim()) {
      Toast.fire({
        icon: "warning",
        title: "請填入 account 和 password",
      });
      return;
    }

    isProcessing.value = true;

    const response = await authorizationAPI.login({
      account: account.value,
      password: password.value,
    });

    const { data, status } = response.data;

    if(status !=='success'){
      throw new Error(status)
    }
    localStorage.setItem("token", data.token);
    console.log(data.user)
    store.commit('setCurrentUser', data.user)

    router.push("/products");
  } catch (err) {
    password.value = "";
    Toast.fire({
      icon: "warning",
      title: "請確認您輸入了正確的帳號密碼",
    });
    isProcessing.value = false;
  }
}
</script>