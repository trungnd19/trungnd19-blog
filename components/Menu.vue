<template>
  <nav class="font-mono">
    <ul class="flex justify-between md:items-center md:space-x-4 flex-row">
      <div class="flex md:items-center md:space-x-4 flex-col md:flex-row">
        <li>
          <NuxtLink to="/about" class="link">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="link">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="link">Blog</NuxtLink>
        </li>
      </div>
      <div>
        <li>
          <ClientOnly>
            <ColorModeSelector />
          </ClientOnly>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
}
</style>
