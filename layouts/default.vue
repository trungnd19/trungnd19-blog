<template>
  <div class="container mx-auto max-w-4xl p-4">
    <header class="flex md:justify-between items-start md:items-center mt-5">
      <div>
        <NuxtLink
          to="/"
          class="hidden md:block text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >trungnd19</NuxtLink
        >
      </div>
      <div class="w-full md:w-auto">
        <Menu></Menu>
      </div>
    </header>

    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: "trungnd19",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
<style>
body {
  font-family: "Roboto";
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
