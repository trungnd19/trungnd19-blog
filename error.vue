<template>
  <NuxtLayout>
    <section>
      <h2 class="text-4xl mb-4">{{ error?.statusCode }}</h2>
      <p class="text-xl text-gray-500 dark:text-gray-400">
        {{ error?.statusMessage }}
      </p>
    </section>
  </NuxtLayout>
</template>
<script setup>
defineProps({
  error: Object,
});
</script>
