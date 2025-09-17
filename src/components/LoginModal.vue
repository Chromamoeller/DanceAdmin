<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
  >
    <div class="bg-white rounded-lg p-6 w-80 shadow-xl">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Login</h2>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Benutzername"
          class="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Passwort"
          class="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="close"
            class="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Abbrechen
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{ visible: boolean }>();
const emit = defineEmits(["close", "login"]);

const username = ref("");
const password = ref("");

function close() {
  emit("close");
}

function onSubmit() {
  emit("login", { username: username.value, password: password.value });
}
</script>
