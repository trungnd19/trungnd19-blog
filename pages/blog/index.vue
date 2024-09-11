<template>
  <h2 class="text-2xl font-semibold mb-10">Blogs list</h2>
  <section class="font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>

    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'opacity-0': !post.displayDate,
              'opacity-1': post.displayDate,
            }"
          >
            {{ new Date(post.publishedAt).getFullYear() }}
          </div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Post } from "~/types/types";

const { data } = await useAsyncData("blog-list", () =>
  queryContent("/blog")
    .only(["_path", "title", "publishedAt"])
    .sort({ publishedAt: -1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const results = [];
  let lastYear = null;
  for (let post of data.value as Post[]) {
    const postYear = new Date(post.publishedAt).getFullYear();
    post.displayDate = postYear !== lastYear;
    results.push(post);
    lastYear = postYear;
  }

  return results;
});

console.log(posts.value);
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
