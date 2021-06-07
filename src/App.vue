<template>
  <div class="flex flex-col h-full">
    <Navbar />
  </div>
  <div class="flex-1">
    <router-view />
  </div>
  <div>
  <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
