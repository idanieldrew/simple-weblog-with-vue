<template>
  <div>
    <Article />
    <Article />
    <Article />

    <div class="mt-8 pr-6">
          <router-link class="px-4 py-2 bg-transparent border text-blue-500 rounded no-underline hover:underline" to="articles">مقالات دیگر</router-link>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
export default {
  components: {
    Article,
  },
};
</script>

<style></style>
