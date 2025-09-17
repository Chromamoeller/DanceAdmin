<template>
  <header
    class="flex items-center justify-between bg-white shadow-md px-6 py-4"
  >
    <h1 class="text-2xl font-semibold text-gray-800">DanceAdmin</h1>
    <div class="flex-1 mx-6 max-w-lg">
      <input
        type="text"
        placeholder="Suche…"
        v-model="query"
        class="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
    <LoginButton @open="showLogin = true" />
    <LoginModal
      :visible="showLogin"
      @close="showLogin = false"
      @login="handleLogin"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginButton from "./LoginButton.vue";
import LoginModal from "./LoginModal.vue";

const query = ref("");
const showLogin = ref(false);

function handleLogin(credentials: { username: string; password: string }) {
  console.log("Login-Daten", credentials);
  showLogin.value = false;
  // hier später echte Authentifizierung einbauen
}
</script>
