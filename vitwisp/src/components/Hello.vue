<template>
  <img
    alt="Vitwisp logo"
    class="mx-auto max-w-56 mb-10"
    src="https://firebasestorage.googleapis.com/v0/b/qalaya-painel.appspot.com/o/qalaya%2FVepprt.png?alt=media&token=0756bd26-01d2-4ba0-809c-7c47c86cc94f"
  />

  <h1 class="text-5xl font-bold">{{ props.message }}</h1>

  <p class="font-semibold mt-2">
    A Vue 3 + Vite Project Starter with some of our favorite libraries and
    resources.
  </p>

  <ul class="my-6 p-6">
    <li>⚡️ Vite</li>
    <li>🦄 Vue 3 + Typescript</li>
    <li>🔥 PWA</li>
    <li>🛴 Vue Router</li>
    <li>🍍 Pinia</li>
    <li>🐽 Vitest</li>
    <li>☔️ ESLint</li>
    <li>🌪 WindiCSS</li>
  </ul>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    message: {
      type: String,
      required: true
    }
  })
</script>

<style lang="postcss" scoped>
  li {
    @apply text-lg;
  }
</style>
