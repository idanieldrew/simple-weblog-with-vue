<template>
  <div>
    <Hero />
  </div>
  <div>
    <Articles />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Articles from "@/components/Articles.vue";
export default {
  components: {
    Hero,
    Articles,
  },
};
</script>

<style></style>
