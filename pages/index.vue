<template>
  <div>
    <article class="prose dark:prose-invert">
      <ContentDoc path="/about" />
    </article>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Main page",
  description: "Main page",
  ogTitle: "Main page",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});
</script>
