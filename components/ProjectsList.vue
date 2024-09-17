<template>
  <div>
    <p class="mb-10">Take a look at some of my projects!</p>
    <section v-if="status === 'pending'">Loading...</section>
    <section v-else-if="error">
      Something went wrong, please try reload the page!
    </section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repository in selectedRepos"
          :key="repository.id"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
        >
          <a target="_blank" :href="repository.html_url">
            <div class="flex items-center justify-between text-sm">
              <div class="font-extrabold">{{ repository.name }}</div>
              <!-- <div>{{ repository.stargazers_count }} *</div> -->
            </div>
            <p class="text-sm">
              {{ repository.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { GithubRepo } from "~/types/types";

const highlightProjects = ["vue-spoiler", "hello-words-vue"];

const { data, status, error } = await useFetch<GithubRepo[]>(
  "https://api.github.com/users/trungnd19/repos"
);

const selectedRepos = computed(() => {
  if (!data.value) {
    return [];
  }

  return data.value.filter((repo) => {
    return highlightProjects.includes(repo.name);
  });
});
</script>

<style scoped></style>
