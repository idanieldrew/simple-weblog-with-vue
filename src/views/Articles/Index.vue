<template>
  <Hero Image="/Images/Articles.jpg" alt="about" Info="درباره ما" />
  <div>
    <Articles />
    <Articles />
    <Articles />
    <Articles />
    <Articles />
    <Articles />
    <Articles />
  </div>
</template>

<script>
import Hero from "@/components/MainHero.vue";
import Articles from "@/components/Articles.vue";
export default {
  components: {
    Hero,
    Articles,
  },
};
</script>

<style></style>
